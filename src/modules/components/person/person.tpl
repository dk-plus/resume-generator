
  <div class="person">
    {{if data.avater}}
    <div class="avater">
      <img src={{data.avater}} alt="">
    </div>
    {{/if}}
    {{each data.p as item}}
    <p>{{item}}</p>
    {{/each}}
  </div>