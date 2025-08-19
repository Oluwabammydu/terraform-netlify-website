terraform {
  cloud {

    organization = "OluwabamiseO"

    workspaces { 
      name = "netlify-resume-deployment" 
    } 
  }
  required_providers {
    netlify = {
      source  = "AegirHealth/netlify"
      version = "~> 0.6"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
    # null = {
    #   source  = "hashicorp/null"
    #   version = "~> 3.1"
    # }
    # local = {
    #   source  = "hashicorp/local"
    #   version = "~> 2.1"
    # }
  }
}