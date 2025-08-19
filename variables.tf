variable "site_name_prefix" {
  description = "Prefix for the site name"
  type        = string
  default     = "terra-explorer"
}

# variable "site_name" {
#   description = "Name of the Netlify site"
#   type        = string
#   default     = "netlify-website"
# }

# variable "site_domain" {
#   description = "Custom domain for the site (optional)"
#   type        = string
#   default     = ""
# }

variable "github_token" {
  description = "Your GitHub personal access token"
  type        = string
  sensitive   = true
}

variable "netlify_token" {
  description = "Your Netlify personal access token"
  type        = string
  sensitive   = true
}
