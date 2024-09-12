document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Order Now button click functionality
    const orderButtons = document.querySelectorAll('.menu-button');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your order!'); // Placeholder for actual order handling
        });
    });
});
