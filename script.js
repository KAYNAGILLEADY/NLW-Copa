let ignite = true

function changeCard(event) {
    const card = event.currentTarget
    let backgroundImage = ignite ? "url(./assets/ignite.svg)" : "url(./assets/explorer.svg)";
    ignite = !ignite
    card.style.backgroundImage = backgroundImage
}