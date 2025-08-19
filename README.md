# terraform-netlify-website
Build and deploy a simple live website on Netlify using Terraform, while managing your Terraform state securely in HCP Terraform (Terraform Cloud).

# Netlify Terraform Website Deployment

A simple static website deployed to Netlify using Terraform with HCP Terraform for remote state management.

## Prerequisites

- Terraform >= 1.0
- Netlify account with Personal Access Token
- HCP Terraform account with organization and workspace

## Setup Instructions

1. **Clone and configure:**
   ```bash
   git clone <your-repo-url>
   cd netlify-terraform-website