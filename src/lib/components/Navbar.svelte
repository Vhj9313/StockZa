<script>
    import { onMount } from 'svelte';
  
    let isOpen = false;
  
    // Function to toggle the menu open/close
    function toggleMenu() {
      isOpen = !isOpen;
    }
  
    // Function to close the menu
    function closeMenu() {
      isOpen = false;
    }
  
    // Close the menu when clicking outside
    function handleClickOutside(event) {
      const menu = document.querySelector('.navbar-menu');
      const toggleButton = document.querySelector('.navbar-toggle');
      const navbar = document.querySelector('.navbar');
  
      // Close menu if click is outside of navbar or the toggle button
      if (
        menu &&
        !menu.contains(event.target) &&
        !toggleButton.contains(event.target) &&
        !navbar.contains(event.target)
      ) {
        closeMenu();
      }
    }
  
    // Add event listener when the component mounts
    onMount(() => {
      document.addEventListener('click', handleClickOutside);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  </script>
  
  <nav class="navbar">
    <div class="navbar-inner">
      <!-- Navbar Header with brand and hamburger for mobile -->
      <div class="navbar-header">
        <!-- App name (StockZa) -->
        <h1 class="navbar-brand">StockZa</h1>
  
        <!-- Hamburger Button for Mobile (below 600px) -->
        <button class="navbar-toggle" on:click={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>
      </div>
  
      <!-- Navbar Menu -->
      <ul class={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="/" on:click={closeMenu}>Home</a></li>
        <li><a href="/stocks" on:click={closeMenu}>Stocks</a></li>
        <li><a href="/indices" on:click={closeMenu}>Indices</a></li>
        <li><a href="/news" on:click={closeMenu}>News</a></li>
        <li><a href="/settings" on:click={closeMenu}>Settings</a></li>
      </ul>
    </div>
  </nav>
  
  <style>
    /* Base Styles */
    .navbar {
      width: 100%;
      background-color: #0f172a; /* Dark background */
      color: white;
      padding: 16px 20px; /* Reduced padding */
      box-sizing: border-box; /* Ensures padding is included in total width */
    }
  
    /* Inner Container to align content */
    .navbar-inner {
      width: 100%; /* Full width */
      margin: 0 auto;
      display: flex;
      justify-content: space-between; /* Space between brand and menu */
      align-items: center;
      flex-wrap: nowrap;
    }
  
    /* Navbar Header for app name and hamburger */
    .navbar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  
    /* App name (StockZa) */
    .navbar-brand {
      font-size: 1.8rem;
      font-weight: bold;
      color: #38bdf8; /* Bright blue */
      margin: 0;
      flex: 1; /* Flex to left align */
    }
  
    /* Hamburger button (only visible on small screens) */
    .navbar-toggle {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
    }
  
    /* Navbar Menu (Navigation items) */
    .navbar-menu {
      display: flex;
      gap: 24px;
      list-style: none;
      margin: 0;
      padding: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
      justify-content: flex-end; /* Align to the right */
    }
  
    .navbar-menu li {
      display: inline-block;
    }
  
    .navbar-menu a {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      transition: background-color 0.3s ease;
    }
  
    .navbar-menu a:hover {
      background-color: #334155;
    }
  
    /* Mobile View (below 600px) */
    @media (max-width: 660px) {
      /* Navbar Menu - Initially hidden */
      .navbar-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #1e293b;
        position: absolute;
        top: 65px;
        left: 0;
        transform: translateY(-100%);
        opacity: 0;
        z-index: -1;
        padding: 15px 0; /* Padding for the menu */
      }
  
      /* When the menu is open, slide down */
      .navbar-menu.open {
        transform: translateY(0);
        opacity: 1;
        z-index: 10;
      }
  
      /* Hamburger button is visible on small screens */
      .navbar-toggle {
        display: block;
      }
  
      /* Make navbar inner take full width */
      .navbar-inner {
        flex-direction: column;
        align-items: flex-start;
      }
  
      /* Brand name (StockZa) */
      .navbar-brand {
        text-align: left; /* Left-align on small screens */
        flex: 1;
      }
    }
  
    /* Above 600px (for larger screens) */
    @media (min-width: 661px) {
      /* Set full width for larger screens */
      .navbar-inner {
        display: flex;
        justify-content: space-between; /* Space between brand and menu */
        align-items: center;
        width: 100%; /* Take full width */
      }
  
      /* App name (StockZa) aligned left */
      .navbar-brand {
        text-align: left; /* Left-aligned on large screens */
        flex: 1; /* Take full space on the left */
      }
  
      /* Navbar Menu aligned right */
      .navbar-menu {
        justify-content: flex-end; /* Align menu items to the right */
        gap: 24px;
      }
  
      /* Hide the hamburger menu on larger screens */
      .navbar-toggle {
        display: none;
      }
    }
  
  </style>
  