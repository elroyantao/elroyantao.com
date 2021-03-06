# -----------------------------------------------------------------------------
# Variables: General
# -----------------------------------------------------------------------------

variable "environment" {
  type        = string
  default     = "local"
  description = "AWS resource namespace/prefix"
}

variable "region" {
  type        = string
  default     = "eu-west-2"
  description = "AWS region"
}

variable "application_name" {
  type        = string
  description = "Resource name for billing purposes"
}
