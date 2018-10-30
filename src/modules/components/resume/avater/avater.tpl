<div class="avater {{type}}" 
  style="
  {{if width}}
    width:{{width}}px;
  {{/if}}
  {{if height}}
    height:{{height}}px;
  {{/if}}
">
  <img class="{{imgStyle}}" 
    src="{{src}}" 
    alt="{{desc}}" 
    title="{{desc}}"
    style="
      {{if offsetX}}
        margin-left:{{offsetX}}px;
      {{/if}}
      {{if offsetY}}
        margin-top:{{offsetY}}px;
      {{/if}}
    "
  />
</div>