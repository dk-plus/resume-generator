{{if type === 'text'}}
<div class="key-value-map">
  {{each data as item index}}
    <div class="item">
      <div class="label">{{item.key}}：</div>
      {{if item.type === 'link'}}
        <div class="value">
          <a href="http://{{item.value}}">{{item.value}}</a>
        </div>
      {{else}}
        <div class="value">{{item.value}}</div>
      {{/if}}
    </div>
  {{/each}}
</div>
{{/if}}

{{if type === 'progress'}}
<div class="key-value-map">
  {{each data as item index}}
    <div class="item">
      <div class="label">{{item.key}}：</div>
      <div class="progress-full-bar">
        <div class="progress-value-bar" data-value={{item.value}} style="width: {{item.value}}%"></div>
      </div>
    </div>
  {{/each}}
</div>
{{/if}}