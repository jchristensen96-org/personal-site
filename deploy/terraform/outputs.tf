#####################
# S3 Outputs
#####################

output "root_bucket_id" {
  value       = aws_s3_bucket.root.id
  description = "Name of the root bucket."
}

output "www_bucket_id" {
  value       = aws_s3_bucket.root.id
  description = "Name of the www bucket."
}

output "bucket_website_endpoint" {
  value       = aws_s3_bucket_website_configuration.root.website_endpoint
  description = "Website endpoint."
}