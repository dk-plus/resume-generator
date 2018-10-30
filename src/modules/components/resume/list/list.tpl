<div class="list">
  {{if type === 'ul'}}
    <ul class="ul-list">
      {{each data as item index}}
        <li>· {{item}}</li>
      {{/each}}
    </ul>
  {{/if}}
  {{if type === 'ol'}}
    <ol class="ol-list">
      {{each data as item index}}
        <li>{{index+1}}. {{item}}</li>
      {{/each}}
    </ol>
  {{/if}}
  {{if type === 'tag'}}
    <ul class="tag-list">
      {{each data as item index}}
        <li>{{item}}</li>
      {{/each}}
    </ul>
  {{/if}}
</div>