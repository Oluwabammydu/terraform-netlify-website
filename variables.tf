variable "site_name_prefix" {
  description = "Prefix for the site name"
  type        = string
  default     = "terra-explorer"
}

variable "github_token" {
  description = "GitHub personal access token"
  type        = string
  sensitive   = true
}

variable "netlify_token" {
  description = "Netlify personal access token"
  type        = string
  sensitive   = true
}
