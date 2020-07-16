gatsby poc
A starter to displaya storefront with Gatsby & Stripe Functions; includes live data.

Features
Statically generate based on Stripe inventory

Serverless functions interact with Stripe API
Getting Started
Create a new site from this starter

gatsby new <project-name> https://github.com/sindy2731990/POC_GATSBY
Setup Stripe
  
Before starting your site, you should create at least one product with one sku in Stripe.

:warning: Cannot query field errors usually mean that a queried field is empty in all of your products/skus. Either define the field in your Stripe data, or remove it from the the GraphQL queries of allStripeSku.

Configure API keys

Rename .env.example to .env and fill with your Stripe API test keys. 

Start development servers

gatsby develop


Your site is accessible at http://localhost:8000!



Start developing

This starter aims to handle some of the plumbing needed to integrate Gatsby & Stripe.

