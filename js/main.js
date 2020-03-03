var sidebarCollapse = document.getElementById('sidebarCollapse')
var sidebar = document.getElementById('sidebar')

sidebarCollapse.onclick = () => {collapseFunction()};

function collapseFunction() {
  const toggleClass = (el, className) => el.classList.toggle(className);
	toggleClass(sidebar, 'active');
}