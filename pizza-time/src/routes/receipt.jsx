import StatusBar from "../statusbar";
import TitleBar from "../titlebar";
import { useLocation } from 'react-router-dom';
import './../styles/receipt.css'

export default function Receipt() {
 // Warning, you may cry when reading my codebase. 
 // One thing not to cry about is the cost associated with these pizzas.
 // Some of our orders have reached ~$280, but this order below, for 24 pizzas,
 // with pick-up, sits at around the ~$190 zone. 

 // Future weeks, with significant drop-off in attendance from 60 to 50ish,
 // may drop this value down to ~$150 or so. $3 per head?

 return (
    <>
      <TitleBar/>
      <StatusBar/>
      <div className="receipt">
          <h2>Domino's Digital St. Pizza (10/03/2025)</h2>
          <h3>$0 	Pepperoni (Large, Classic)	</h3>
          <h3>$0 	Pepperoni (Large, Classic)	</h3>
          <h3>$0 	Pepperoni (Large, Classic)	</h3>
          <h3>$0 	Pepperoni (Large, Classic)	</h3>
          <h3>$0 	Pepperoni (Large, Classic)	</h3>
          <h3>$0 	Pepperoni (Large, Classic)	</h3>
          <h3>$0 	Pepperoni (Large, Thin 'n' Crispy)	SANDARU</h3>
          <h3>$0 	Ham & Cheese (Large, Classic)	</h3>
          <h3>$0 	Ham & Cheese (Large, Classic)	</h3>
          <h3>$0 	Ham & Cheese (Large, Classic)	</h3>
          <h3>$0 	Ham & Cheese (Large, Classic)	</h3>
          <h3>$0 	Spicy Lovers (Large, Classic)	</h3>
          <h3>$0 	Spicy Lovers (Large, Classic)	</h3>
          <h3>$0 	Spicy Lovers (Large, Classic)	</h3>
          <h3>$0 	Spicy Lovers (Large, Classic)	</h3>
          <h3>$0 	Cheesy Garlic (Large, Classic)	VEG</h3>
          <h3>$0 	Cheesy Garlic (Large, Classic)	VEG</h3>
          <h3>$0 	Margherita (Large, Classic)	VEG</h3>
          <h3>$0 	Margherita (Large, Classic)	VEG</h3>
          <h3>$0 	Chicken Supreme (Large, Classic)	HALAL</h3>
          <h3>$0 	Chicken Supreme (Large, Classic)	HALAL</h3>
          <h3>$0 	Creamy Chicken & Mushroom (Large, Classic)	HALAL</h3>
          <h3>$0 	Creamy Chicken & Mushroom (Large, Classic)	GF, HALAL</h3>
          <h3>$0 	Pepperoni (Large, Gluten Free Sourdough Base)	GF</h3>
          <h3>$0 	Spicy Lovers (Large, Gluten Free Sourdough Base)	GF</h3>
          <h3>----------------------------------------------------------------</h3>
          <h3>Total Digital Pizzas: 24</h3>
          <h3>Total Cost: $0 (Anthony is happy)</h3>

      </div>
    </>
  );
};
