resource "random_string" "site_name" {
  length = 5
  lower  = true
}

resource "netlify_site" "main" {
  name = "${var.site_name_prefix}-${random_string.site_name.id}"
  
  repo {
    repo_branch = "main"
    provider    = "github"
    repo_path   = "Oluwabammydu/terraform-netlify-website"
    publish_path = "site"
  }
}