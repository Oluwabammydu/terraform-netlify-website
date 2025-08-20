resource "random_string" "site_name" {
  length = 5
  lower  = true
  upper   = false 
  numeric = false 
  special = false 
}

# locals {
#   site_name = "${var.site_name_prefix}-${random_string.site_name.id}"
# }

resource "netlify_site" "du" {
  name = "${var.site_name_prefix}-${random_string.site_name.id}"

  repo {
    repo_branch = "main"
    provider    = "github"
    repo_path   = "Oluwabammydu/terraform-netlify-website"
  }
}