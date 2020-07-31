<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo</title>
  </head>
  <body style="background: aqua;">
    <form method="POST" autocomplete="off">
      <h1>{{ title }}</h1>
      <input
        type="text"
        placeholder="Add an item"
        name="item"
        value="{{ todo.item }}"
      />
      <span style="color: red;">{{err}}</span>
      <button>Submit</button>
    </form>
    <hr />
    <ul>
      {{#each item}}
      <li id='edit'>
        {{ this.item }}
       <!-- <a href="edit/{{ this._id }}">Edit</a> -->
        <a href="delete/{{ this._id }}">Delete</a>
      </li>
      {{/each}}
    </ul>
  </body>
</html>
