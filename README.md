# Personal Site

See: [jonathanchristensen.com](https://jonathanchristensen.com)

My personal website. I used ReactJS + [Vite]("https://vitejs.dev/") to put this website together. It's main purpose is to host an updated copy of my resume and recent projects.

## Deployment

The website uses Github Actions to automate the deployment after updates are commited to the main branch. The workflow has two jobs, one that creates the AWS resources via Terraform and another that builds the react app into static files and then syncs the files to the S3 bucket.

## Infrastructure

All the resources needed for the website are created during the deployment except the domain name. The resources include: S3 buckets + S3 website/security configurations, a Cloudfront distribution, an ACM certificate for TLS, and the proper Route 53 records to provide name resolution.

## Building

The deployment uses Vite to build the static assets before using the `aws s3 sync` command to sync the files from the build output directory to the S3 bucket.