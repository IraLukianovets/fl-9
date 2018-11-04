const template = `
<div class="container">
<div class="search-block">
  <form class="search-form">
    <label>Search by name:
      <input type="text" id="searchField" placeholder="Enter user name">
    </label>
  </form>
</div>
<div class="table-wrap">
  <table class="users-table">
    <thead>
      <tr>
        <th>Photo</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone number</th>
        <th>Time zone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="users">
    </tbody>
  </table>
</div>
<div class="show-more">
  <p class="user-count">Displayed <span id="displayed"></span> users out of <span id="out-of"></span></p>
  <button class="btn" id="loadMore">Load more</button>
</div>
</div>
`;
export {template};