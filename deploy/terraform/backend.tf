terraform {
  required_version = "1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "jchristensen96-terraform-state"
    key            = "projects/resume-website/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "jchristensen96-terraform-state-lock"
    encrypt        = true
  }
}

provider "aws" {
  region = var.aws_region
}