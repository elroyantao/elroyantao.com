terraform {
  backend "remote" {
    organization = "EATechSolutions"

    workspaces {
      name = "PersonalWebsite"
    }
  }
}