#####################
# S3 Resources
#####################

# Website Buckets

resource "aws_s3_bucket" "root" {
  bucket = var.domain_name
}

resource "aws_s3_bucket" "www" {
  bucket = var.www_domain_name
}

resource "aws_s3_bucket_ownership_controls" "root" {
  bucket = aws_s3_bucket.root.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "root" {
  bucket = aws_s3_bucket.root.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "example" {
  depends_on = [
    aws_s3_bucket_ownership_controls.root,
    aws_s3_bucket_public_access_block.root,
  ]

  bucket = aws_s3_bucket.root.id
  acl    = "public-read"
}

# S3 Website Configuration Resources

resource "aws_s3_bucket_website_configuration" "root" {
  bucket = aws_s3_bucket.root.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_website_configuration" "www" {
  bucket = aws_s3_bucket.www.id

  redirect_all_requests_to {
    host_name = var.domain_name
    protocol  = "http"
  }
}

resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.root.id
  policy = data.aws_iam_policy_document.this.json
}

data "aws_iam_policy_document" "this" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.root.arn}/*",
    ]
  }
}

#####################
# Route 53
#####################

# Hosted Zone

import {
  to = aws_route53_zone.this
  id = "Z0628336AWXKPKO1NM4U"
}

resource "aws_route53_zone" "this" {
  name = "jonathanchristensen.com"
}

# Alias Records

resource "aws_route53_record" "root" {
  name    = var.domain_name
  type    = "A"
  zone_id = aws_route53_zone.this.zone_id

  alias {
    name                   = aws_cloudfront_distribution.root.domain_name
    zone_id                = aws_cloudfront_distribution.root.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  name    = "www"
  type    = "A"
  zone_id = aws_route53_zone.this.zone_id

  alias {
    name                   = aws_cloudfront_distribution.www.domain_name
    zone_id                = aws_cloudfront_distribution.www.hosted_zone_id
    evaluate_target_health = false
  }
}

#####################
# ACM
#####################

# Certificate Resource

resource "aws_acm_certificate" "root" {
  domain_name               = var.domain_name
  subject_alternative_names = [var.www_domain_name]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# Create Validation Records

resource "aws_route53_record" "validation" {
  for_each = {
    for dvo in aws_acm_certificate.root.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.this.zone_id
}

# Create Validation Records

resource "aws_acm_certificate_validation" "this" {
  certificate_arn         = aws_acm_certificate.root.arn
  validation_record_fqdns = [for record in aws_route53_record.validation : record.fqdn]
}

#####################
# CloudFront
#####################

resource "aws_cloudfront_distribution" "root" {
  enabled = true

  origin {
    domain_name = aws_s3_bucket_website_configuration.root.website_endpoint
    origin_id   = var.domain_name
    custom_origin_config {
      http_port = "80"
      https_port = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.root.arn
    ssl_support_method = "sni-only"
  }

  aliases = [var.domain_name]

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  default_cache_behavior {
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = var.domain_name
  }
}

resource "aws_cloudfront_distribution" "www" {
  enabled = true

  origin {
    domain_name = aws_s3_bucket_website_configuration.www.website_endpoint
    origin_id   = var.www_domain_name
    custom_origin_config {
      http_port = "80"
      https_port = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.root.arn
    ssl_support_method = "sni-only"
  }

  aliases = [var.www_domain_name]

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  default_cache_behavior {
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = var.www_domain_name
  }
}