# Terraform Netlify Site with Remote State

This project deploys a static website to Netlify using Terraform. It is configured to be managed remotely via a VCS-driven workflow in HCP Terraform (Terraform Cloud), ensuring a secure, collaborative, and repeatable process.



---

## Prerequisites 🛠️

Before you begin, ensure you have the following:

* **Terraform v1.0.0 or newer**: This configuration is designed for modern versions of Terraform.
* **A Netlify Account**: You will need a free or paid Netlify account.
* **A GitHub Account**: Your website's source code and Terraform code should be in a GitHub repository.
* **An HCP Terraform (Terraform Cloud) Account**: You will need a free or paid account to manage the remote state and run deployments.

---

## Setup and Deployment 🚀

This project is designed to be run as a VCS-driven workflow in HCP Terraform.

### 1. Fork and Clone the Repository

First, fork this repository to your own GitHub account and then clone it to your local machine.

### 2. Connect to HCP Terraform

You will need to create and configure a workspace in your HCP Terraform organization.

1.  **Create a New Workspace**: In your HCP Terraform dashboard, create a new workspace, selecting the **"Version control workflow"** option.
2.  **Connect to GitHub**: Connect the workspace to your forked GitHub repository.
3.  **Confirm Workspace**: HCP Terraform will automatically detect the Terraform configuration. The workspace name can be anything you like (e.g., `netlify-website-deploy`).

### 3. Set Netlify Credentials and Other Variables

In your newly created HCP Terraform workspace, navigate to the **"Variables"** tab to set the required credentials. It is critical to store your Netlify token securely.

* **`NETLIFY_AUTH_TOKEN`**:
    * **Category**: `Environment Variable`
    * **Key**: `NETLIFY_AUTH_TOKEN`
    * **Value**: Your Netlify Personal Access Token.
    * **Sensitive**: ✅ **Check this box** to protect your token.

* **`github_token`**: (If your provider block uses `var.github_token`)
    * **Category**: `Terraform Variable`
    * **Key**: `github_token`
    * **Value**: Your GitHub Personal Access Token.
    * **Sensitive**: ✅ **Check this box**.

---

## Usage

### How to Run

Because this is a VCS-driven workflow, you do not run `terraform apply` from your local command line. Instead, deployments are triggered by commits to your GitHub repository.

1.  **Trigger a Run**: Make a change to your code and push it to the `main` branch of your repository. This will automatically trigger a new "plan" in your HCP Terraform workspace.
2.  **Review the Plan**: Go to the **"Runs"** tab in your workspace. Review the plan to ensure the proposed changes are correct.
3.  **Apply the Changes**: If you are satisfied with the plan, click **"Confirm & Apply"** to deploy your website.

### Terraform Outputs

After a successful deployment, you can find the following information in the **"Outputs"** tab of your HCP Terraform workspace:

* **`site_url`**: The live, public URL of your deployed Netlify website.
* **`site_id`**: The unique ID of your site within Netlify.
* **`admin_url`**: The URL to the administrative dashboard for your site on Netlify.