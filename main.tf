resource "random_string" "site_name" {
  length = 5
  lower  = true
}

resource "netlify_site" "du" {
  name = "${var.site_name_prefix}-${random_string.site_name.id}"
  build_publish_dir = "site"

  repo {
    repo_branch = "main"
    provider    = "github"
    repo_path   = "Oluwabammydu/terraform-netlify-website"
  }
}