<!-- src/lib/components/Sidebar.svelte -->
<aside>
    <ul>
      <li><a href="/stocks">Stocks</a></li>
      <li><a href="/news">News</a></li>
      <li><a href="/settings">Settings</a></li>
    </ul>
  </aside>
  
  <style>
    aside {
      width: 200px;
      background-color: #f4f4f4;
      padding: 20px;
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: #333;
    }
  </style>
  