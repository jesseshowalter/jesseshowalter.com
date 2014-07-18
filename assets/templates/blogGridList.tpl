[[$top]]
</head>

<body>
<div class="container container_blue headerBlog" style="background-image:url(assets/css/img/blogBannerNew.jpg);  background-position:[[*adjustBanner]];">
	[[$nav2]]
    <!--
    <ul class="socialIcons">
    	<li><a class="hide-text twitter" href="http://www.twitter.com/jesseatomic" target="_blank">Twitter</a></li>
	    <li><a class="hide-text linkedin" href="http://www.linkedin.com/in/jesseshowalter" target="_blank">LinkedIn</a></li>
		<li><a class="hide-text dribbble" href="https://dribbble.com/JesseShowalter" target="_blank">Dribble</a></li>
        <li><a class="hide-text youtube" href="http://www.youtube.com/user/JesseAtomic/videos" target="_blank">You Tube</a></li>
        <li><a class="hide-text forrst" href="https://forrst.com/people/jesseatomic" target="_blank">Forrrst</a></li>
		<li><a class="hide-text github" href="https://github.com/jesseshowalter" target="_blank">Github</a></li>
	</ul>
    -->
</div>
<div class="container mainBody">
	<div id="riseUpTwo">
		<div class="row">
			<div class="twelvecol newBlogList">
				<div id="blogGridList">
					[[*content]]
				</div>
			</div>
		</div> <!-- /row -->
	</div> <!-- /riseUp -->
</div>

[[$footer]]
<script type="text/javascript"
    src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $(".flip").click(function() {
            $(".panel").slideToggle("fast");
        });
    });
</script>
[[$bottom]]