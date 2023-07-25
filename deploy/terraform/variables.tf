variable "aws_region" {
  description = "AWS region to use"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  type        = string
  description = "The domain name for the website."
}

variable "www_domain_name" {
  type        = string
  description = "The domain name for the website with a www subdomain."
}