<?php
$lang = "en-IE";
$title = "Super keywordy — A resource for content writers and SEO specialists";
$metadesc = "Super keywordy is a resource for online content writers and offers an on-page SEO tool to help optimize your content for better search visibility. Use your keywords in the all right places.";
$keywords = "";
$robots = "noindex, nofollow";
$author = "Graham O'Mahony";
$contentdate = "2018-04-08";
$page = "home";
$subject = "On-page SEO";
$canonical = "https://www.superkeywordy.com";
$ogtype = "website";
$ogimage = "/assets/images/super-keywordy-promo.jpg";
$homeID = "Super keywordy";
$header = $_SERVER['DOCUMENT_ROOT'];
$header .= "/includes/header.php";
$footer = $_SERVER['DOCUMENT_ROOT'];
$footer .="/includes/footer.php";
include_once($header);
?>
<section id="home-hero" class="hero col-1">
<div class="col-w">
	<article id="featcont" class="col-1">
		<h1 class="heading"><strong>On-page <abbr title="Search Engine Optimization">SEO</abbr> tool</strong></h1>
		<p class="headline">Use your keywords in all the right places</p>
	</article>
	</div>
</section>
<section class="col-1 longcontent">
	<main class="col-w">
		<article>
			<div class="col-1">
				<div class="col-2">
					<h2 class="heading contH2">What is Super keywordy?</h2>
					<p>Super keywordy is a resource for online content writers and SEO specialists. It currently offers an <em>on-page</em> SEO tool to help optimize your web-page content for better search visibility, and plans to develop more tools.</p>
					<h3>An optimization tool for the ideal content</h3>
					<p>The tool was originally created to help online content writers create the best content.</p>
					<p>Just start typing and click <em>"Check SEO"</em> to see if your content is optimized for your target keyword.</p>
				</div>
				<div class="col-2">
					<table id="_seoresults">
						<caption>Keyword analytics</caption>
						<tbody>
							<tr>
								<th class="stats" colspan="3">Primary keyword <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">Primary keyword is the broad keyword or subject of the page.</span></span></th>
							</tr>
							<tr>
								<th class="statistics">Keyword count <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">The number of times the keyword appears in the following: title, URI, meta description, main heading and body text.</span></span></th>
								<th class="statistics">Total word count <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">Total number of words in the following: title, URI, meta description, main heading and body text.</span></span></th>
								<th class="statistics">Keyword density <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">% rate: number of times the primary keyword appears in all 6 sections.</span></span></th>
							</tr>
							<tr>
								<td class="metrics"></td>
								<td class="metrics"></td>
								<td class="metrics">%</td>
							</tr>
							<tr>
								<th class="statistics" colspan="3">Body text analysis <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">Analyzes keyword presence in the body text.</span></span></th>
							</tr>
							<tr>
								<td colspan="3"></td>
							</tr>
						</tbody>
					</table>
					<div class="pseudocaption">
						<p>The keyword statistics table gives you metrics on keyword counts, word counts, density and more.</p>
					</div>
				</div>
			</div>
		</article>
	</main>
</section>
<section class="col-1 longcontent">
	<main class="col-w">
		<article>
			<div class="col-2x">
				<h2 class="heading">Increase organic traffic to your website</h2>
				<p>With the <em>right keywords</em>, you can get the <em>right traffic</em> to your site. Once you have your all-powerful target keywords, use the Super keywordy on-page SEO tool to help you optimize your content.</p>
				<p>It's a great feeling to see your online content attract users. The tool will allow you to optimize new content that hasn't yet been published.</p>
			</div>
			<div class="col-3">
				<figure>
					<img class="graphic" src="../assets/images/line-graph-boost-organic-traffic-super-keywordy.png" alt="Line graph." width="476" height="122">
				</figure>
			</div>
		</article>
	</main>
</section>
<section class="col-1 longcontent">
	<aside class="col-2">
		<article>
			<div class="col-n">
				<h3 class="heading">Keyword research</h3>
				<p id="demo">Keyword research is an important part of SEO. There are many steps to good research depending on the type of content you're about to write.</p>
				<p><a href="https://twitter.com/superkeywordy" target="_blank">Super keywordy is on Twitter</a> for help and tips</p>
			</div>
		</article>
	</aside>
	<aside class="col-2">
		<article>
			<div class="col-n">
				<h3 class="heading">Keyword density</h3>
				<p>Super keywordy uses keyword density to indicate if you're using your target keyword too little, or too many times. Too many times and you're <strong><em>keyword stuffing</em></strong> your content.</p>
				<p>Don't overdo it; try the tool!</p>
			</div>
		</article>
	</aside>
</section>
<?php
include_once($footer);
?>