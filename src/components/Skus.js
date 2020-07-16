import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "../pages/css.module.css"
import { loadStripe } from "@stripe/stripe-js"

const containerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0",
}


const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

const Skus = () => {
  return (
    <StaticQuery
      query={graphql`
      query SkusForProduct {
        skus: allStripePrice(sort: {fields: [id]}) {
          edges {
            node {
              product {
                id
                images
                description
                name
              }
              type
              unit_amount
              unit_amount_decimal
            }
          }
        }
      }
      
      `}
      render={({ skus }) => (
        
        <div  className={styles.card}>
          {skus.edges.map(({ node: sku }) => (
           <p key={sku.product.id} className={styles.price}>{sku.product.name} {sku.unit_amount}</p>
           
          )
          
          )}
           
        </div>
      )}
    />
  )
}

export default Skus