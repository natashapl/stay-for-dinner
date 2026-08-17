/**
 * RecipeDrawer
 *
 * A native dialog styled as a side drawer. showModal() gives me Escape-to-
 * close and focus containment without rebuilding either behavior in React.
 * The form with method="dialog" is also a native close control; JavaScript is
 * only responsible for opening the drawer, light-dismiss, and returning focus
 * to its trigger.
 */
export default function RecipeDrawer({ dialogRef, onClose }) {
  function closeFromBackdrop(event) {
    /* A modal dialog reports a backdrop click as a click on the dialog itself.
       Checking the pointer against its real rectangle separates that click
       from one on the drawer's border or empty interior space. */
    if (event.target !== event.currentTarget) return

    const drawer = event.currentTarget.getBoundingClientRect()
    const clickedInside =
      event.clientX >= drawer.left &&
      event.clientX <= drawer.right &&
      event.clientY >= drawer.top &&
      event.clientY <= drawer.bottom

    if (!clickedInside) {
      event.currentTarget.close()
    }
  }

  return (
    <dialog
      id="recipe-drawer"
      className="recipe-drawer"
      ref={dialogRef}
      aria-labelledby="recipe-title"
      aria-describedby="recipe-description"
      onClick={closeFromBackdrop}
      onClose={onClose}
    >
      <article className="recipe-drawer__card">
        <div className="recipe-drawer__topbar">
          <p>Stay for Dinner recipe</p>

          <form method="dialog">
            <button className="recipe-drawer__close" type="submit" value="close">
              Close
            </button>
          </form>
        </div>

        {/* The recipe scrolls, and the only focusable control (Close) sits in
            the topbar outside this box - so with nothing focusable inside it,
            a keyboard-only reader had no way to scroll the recipe at all.
            Making the scroll container itself focusable is the standard fix;
            role + label stop it announcing as an unnamed group. */}
        <div
          className="recipe-drawer__scroll"
          role="region"
          aria-labelledby="recipe-title"
          tabIndex={0}
        >
          <header className="recipe-drawer__header">
            <p className="recipe-drawer__eyebrow">Comfort food, weeknight easy</p>
            <h2 id="recipe-title">Weeknight Pasta &amp; Chicken Meatballs</h2>
            <p id="recipe-description">
              A cozy bowl of pasta, tomato sauce, and store-bought chicken
              meatballs that gets dinner onto the table without much fuss.
            </p>
          </header>

          <dl className="recipe-drawer__meta" aria-label="Recipe details">
            <div>
              <dt>Prep</dt>
              <dd>10 minutes</dd>
            </div>
            <div>
              <dt>Cook</dt>
              <dd>30 minutes</dd>
            </div>
            <div>
              <dt>Serves</dt>
              <dd>4</dd>
            </div>
          </dl>

          <section className="recipe-drawer__section" aria-labelledby="ingredients-title">
            <h3 id="ingredients-title">Ingredients</h3>
            <ul>
              <li>12 ounces dried pasta</li>
              <li>1 tablespoon olive or avocado oil</li>
              <li>2 garlic cloves, finely chopped</li>
              <li>1 jar (24 ounces) of your favorite pasta/marinara sauce</li>
              <li>12–16 ounces fully cooked chicken meatballs</li>
              <li>A small handful of fresh basil or 1/2 teaspoon dried basil</li>
              <li>1.5 tablespoon of coconut aminos plus</li>
              <li>1/4 teaspoon of garlic powder</li>
              <li>1/2 teaspoon of onion powder</li>
              <li>1/2 teaspoon of italian seasoning</li>
              <li>Sea salt and pepper to taste</li>
            </ul>
          </section>

          <section className="recipe-drawer__section" aria-labelledby="instructions-title">
            <h3 id="instructions-title">Instructions</h3>
            <ol>
              <li>
                Cook the pasta in well-salted water until al dente. Reserve a
                cup of pasta water, then drain.
              </li>
              <li>
                Warm the olive or avocado oil in a large skillet. Add the garlic and cook until fragrant.
              </li>
              <li>
                Add the marinara, chicken meatballs and remaining spices. Simmer until the sauce is glossy and the meatballs are heated according to their
                package directions.
              </li>
              <li>
                Toss the pasta with a tablespoon of avocado oil and 1/2 teaspoon of coconut aminos, loosening with a splash of reserved pasta water when needed.
              </li>
              <li>
                Finish with torn basil. Spoon the meatballs over
                the pasta and bring everything to the table.
              </li>
            </ol>
          </section>

          <footer className="recipe-drawer__source">
            <p>
              <strong>Recipe source</strong>
              <span>Source credit will be added with the final recipe copy.</span>
            </p>
          </footer>
        </div>
      </article>
    </dialog>
  )
}
