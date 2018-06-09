{{each data.exps as item}}
  <div class="exp">
    <div class="main">
    {{if item.name}}
      <div class="title">{{item.name}}</div>
    {{/if}}
    {{if item.time}}
      <div class="time">{{item.time}}</div>
    {{/if}}
    </div>

    {{if item.p}}
    <div class="para">
    {{each item.p as p}}
      <p>{{p}}</p>
    {{/each}}
    </div>
    {{/if}}

    {{if item.ol}}
    <ol class="ol-list">
    {{each item.ol as ol index}}
      <li>{{ol}}</li>
    {{/each}}
    </ol>
    {{/if}}

    {{if item.ul}}
    <ul class="ul-list">
    {{each item.ul as ul}}
      <li>{{ul}}</li>
    {{/each}}
    </ul>
    {{/if}}

  </div>
{{/each}}