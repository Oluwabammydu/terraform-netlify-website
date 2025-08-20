# Terraform Netlify Site with Remote State

This project deploys a static website to Netlify using Terraform. It is configured to be managed remotely via a VCS-driven workflow in HCP Terraform (Terraform Cloud), ensuring a secure, collaborative, and repeatable process.



---

## Technologies Used 🛠️

This project leverages a modern IaC and web development stack to achieve a fully automated deployment pipeline.

* **Terraform**: The core Infrastructure as Code (IaC) tool used to define and manage the Netlify site and its configuration.
* **HCP Terraform (Terraform Cloud)**: Provides secure remote state management, a collaborative environment, and orchestrates the VCS-driven deployment runs.
* **Netlify**: The hosting platform for our static website, providing CI/CD, a global CDN, and easy integration with GitHub.
* **GitHub**: Acts as the version control system for all infrastructure and website code. A `git push` to the `main` branch triggers the deployment pipeline.
* **HTML, CSS, & JavaScript**: The foundational web technologies used to build the static website content.

---

## Project Structure 📁

The repository is organized to separate the website's source code from the infrastructure configuration.
Of course. Here is the complete and final README file in a single block of raw Markdown code. You can copy and paste this directly into your README.md file.

Markdown

# Terraform Netlify Site with Remote State

This project deploys a static website to Netlify using Terraform. It is configured to be managed remotely via a VCS-driven workflow in HCP Terraform (Terraform Cloud), ensuring a secure, collaborative, and repeatable process.



---

## Technologies Used 🛠️

This project leverages a modern IaC and web development stack to achieve a fully automated deployment pipeline.

* **Terraform**: The core Infrastructure as Code (IaC) tool used to define and manage the Netlify site and its configuration.
* **HCP Terraform (Terraform Cloud)**: Provides secure remote state management, a collaborative environment, and orchestrates the VCS-driven deployment runs.
* **Netlify**: The hosting platform for our static website, providing CI/CD, a global CDN, and easy integration with GitHub.
* **GitHub**: Acts as the version control system for all infrastructure and website code. A `git push` to the `main` branch triggers the deployment pipeline.
* **HTML, CSS, & JavaScript**: The foundational web technologies used to build the static website content.

---

## Project Structure 📁

The repository is organized to separate the website's source code from the infrastructure configuration.

.
├── .gitignore         # Specifies files for Git to ignore (e.g., local state).
├── index.html         # The main HTML file for the website.
├── main.tf            # The core Terraform file defining the Netlify site resource.
├── outputs.tf         # Declares output variables (e.g., the live site URL).
├── providers.tf       # Configures the Terraform providers (Netlify, GitHub).
├── README.md          # Project documentation.
├── script.js          # JavaScript for the website.
├── style.css          # CSS styles for the website.
├── variables.tf       # Declares input variables for customization (e.g., site name).
└── versions.tf        # Defines required provider versions and the HCP Terraform backend.

---

## Prerequisites

Before you begin, ensure you have the following:

* **[Terraform v1.0.0 or newer](https://developer.hashicorp.com/terraform/downloads)**: To verify your installation, run the command: `terraform --version`.
* **A [Netlify Account](https://app.netlify.com/signup)**: You will need a free or paid Netlify account.
* **A [GitHub Account](https://github.com/join)**: Your website's source code and Terraform code should be in a GitHub repository.
* **An [HCP Terraform (Terraform Cloud) Account](https://portal.cloud.hashicorp.com/sign-up)**: You will need a free or paid account to manage the remote state and run deployments.

---

## Setup and Deployment 🚀

This project is designed to be run as a VCS-driven workflow in HCP Terraform.

### 1. Fork and Clone the Repository

First, fork this repository to your own GitHub account and then clone it to your local machine.

```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME

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

###Local Validation (Optional)
While deployments are handled by HCP Terraform, you can still run plan locally to validate your changes before pushing them to GitHub. First, log in to Terraform Cloud from your terminal:

```bash
terraform login

Then, initialize your configuration and run a plan:

```bash
terraform init
terraform plan

### Terraform Outputs
After a successful deployment, you can find the following information in the **"Outputs"** tab of your HCP Terraform workspace:

* **`site_url`**: The live, public URL of your deployed Netlify website.
* **`site_id`**: The unique ID of your site within Netlify.
* **`admin_url`**: The URL to the administrative dashboard for your site on Netlify.

You can also view a specific output from your local CLI after a deployment has finished:

```bash
terraform output site_url


































