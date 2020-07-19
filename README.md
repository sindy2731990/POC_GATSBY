POC_GATSBY

A starter to create and manage a storefront with Gatsby,  & Sttripe Functions; includes live data.

Features
Create and manage inventory through admin interface
Statically generate based on Stripe inventory

Getting Started
Create a new site from this starter

gatsby new <project-name> https://github.com/sindy2731990/POC_GATSBY/

Setup Stripe

Before starting your site, you should create at least one product with one sku in Stripe.

⚠️ Cannot query field errors usually mean that a queried field is empty in all of your products/skus. Either define the field in your Stripe data, or remove it from the the GraphQL queries of allStripePrice.

Configure API keys

Rename .env.example to .env and fill with your Stripe API test keys. Don't commit this file to a public repo!

Start development servers

gatsby develop
Your site is accessible at http://localhost:8000!


