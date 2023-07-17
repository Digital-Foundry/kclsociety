


// logic to handle the menu button transition
const X = () => {
    const menu = document.querySelector('.bar');
    const nav = document.querySelector('.menu');
    
    menu.addEventListener('click', () => {
       menu.classList.toggle('bar-active');
        nav.classList.toggle('nav-active');
    });
}
X();



function resetZoom() {
    document.body.style.zoom = "1"; // Set the zoom level to the default (100%)
  }

  window.addEventListener("load", resetZoom); // Call the function when the page loads
</script>

