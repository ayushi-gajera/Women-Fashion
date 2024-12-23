// Function to toggle visibility of filter sections and rotate the arrow
function toggleFilter(filterId, header) {
    const filterContent = document.getElementById(filterId);
    const arrow = header.querySelector('.arrow');

    if (filterContent.style.display === "block") {
        filterContent.style.display = "none";
        arrow.classList.remove('expanded');
    } else {
        filterContent.style.display = "block";
        arrow.classList.add('expanded');
    }
}
