output "site_id" {
  description = "The ID of the Netlify site"
  value       = netlify_site.du.id
}

output "site_url" {
  description = "The URL of the deployed site"
  value       = "https://${netlify_site.du.name}.netlify.app"
}