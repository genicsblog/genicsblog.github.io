const sticky=navbar.offsetTop,setStickyness=()=>{const e=document.getElementById("navbar"),t=document.getElementById("banner");window.pageYOffset>=sticky?(e.classList.add("fixed"),t.classList.add("mt-16")):(e.classList.remove("fixed"),t.classList.remove("mt-16"))},toggleNav=()=>{const e=document.getElementById("menu-open"),t=document.getElementById("menu-close"),s=document.getElementById("mobile-nav");t.classList.contains("hidden")?(e.classList.add("hidden"),t.classList.remove("hidden"),s.classList.remove("hidden")):(e.classList.remove("hidden"),t.classList.add("hidden"),s.classList.add("hidden"))},showSearch=()=>{document.getElementById("search-container").classList.remove("hidden"),document.getElementById("search-input").focus();SimpleJekyllSearch({searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),json:"/search.json",debounceTime:500,noResultsText:"<span class='mt-2 flex'>No results found</span>",searchResultTemplate:'<a class="search-item underline-none hover:border-{category}" href="{url}"><span>{title}</span></a>'})},hideSearch=()=>{document.getElementById("search-container").classList.add("hidden"),document.getElementById("search-input").value="",document.getElementById("results-container").innerHTML=""};document.addEventListener("keydown",function(e){e.key.toLowerCase()==="K".toLowerCase()&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),showSearch()),e.key.toLowerCase()==="Escape".toLowerCase()&&hideSearch()});const toggleTheme=()=>{localStorage.getItem("color-theme")?"light"===localStorage.getItem("color-theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"));const e=document.getElementById("theme-toggle-icon");"true"===localStorage.getItem("rotated")?(e.style.transform="rotate(0deg)",localStorage.setItem("rotated","false")):(e.style.transform="rotate(180deg)",localStorage.setItem("rotated","true"))};document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&e.shiftKey&&76===e.keyCode&&toggleTheme()});