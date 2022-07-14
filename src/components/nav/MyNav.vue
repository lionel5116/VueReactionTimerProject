<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/MyGame" class="nav-link">Ninga Game</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/HelloWorld" class="nav-link">HelloWorld</router-link>
            </li>
              <li class="nav-item">
              <router-link to="/DetailForm" class="nav-link">Detail Form</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/FooUnit" class="nav-link">Foo Unit Test</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/BSTableTester" class="nav-link">Bootstrap Table Tester</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/HuckeClient" class="nav-link">Hucke Client Form</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <router-view />
</template>

<script>
export default {
  name: "MyNav",
};
</script>

<style>
</style>