<?php
$lang = "en-IE";
$title = "Optimize your content with the on-page SEO tool — Super keywordy";
$metadesc = "Use the six sections of the on-page SEO tool to ensure you optimize your content. Get keyword counts, content length, total word counts and keyword density rates all in one in-browser tool.";
$keywords = "";
$robots = "noindex, nofollow";
$author = "Graham O'Mahony";
$contentdate = "2018-04-08";
$page = "on-page-seo";
$subject = "On-page SEO tool";
$canonical = "https://www.superkeywordy.com/on-page-seo/";
$ogtype = "website";
$ogimage = "/assets/images/super-keywordy-on-page-seo-tool.jpg";
$breadcrumbID = "On-page SEO tool";
$header = $_SERVER['DOCUMENT_ROOT'];
$header .= "/includes/header.php";
$footer = $_SERVER['DOCUMENT_ROOT'];
$footer .="/includes/footer.php";
include_once($header);
?>
<section class="winbar">
		<p><span class="caution base">Recommendation: conduct keyword research before using this tool.<span class="keyresx">&times;</span></span></p>
</section>
<main id="on_page_seo" class="base">
	<form id="contenttemplate" autocomplete="off">
		<fieldset>
			<section class="superior">
				<h1>On-page SEO tool</h1>
					<p>Split your target keyword into primary and secondary keywords.</p>
					<div class="par">
						<label for="keyword1" class="listed">Primary keyword<span class="asterix">*</span></label><br>
						<input id="keyword1" class="key" type="text" name="keyword1" placeholder="Primary keyword" required="required" tabindex="1">
					</div>
					<div class="par">
						<label for="keyword2" class="listed">Secondary keyword<span class="asterix">*</span></label><br>
						<input id="keyword2" class="key" type="text" name="keyword2" placeholder="Secondary keyword" required="required" tabindex="2"><br>
					</div>
			</section>
			<section class="superior">
				<section class="subsection">
					<!-- Title section -->
					<label class="listed" for="title">Title<span class="asterix">*</span><br><span class="detail">Title of page used by search engines</span></label><span id="titlecount" class="counter" title="Character count, including spaces"></span><br>
					<input id="title" class="basic" type="text" name="title" minlength="55" maxlength="70" placeholder="Title of the page &mdash; Parent | Site" required="required" oninput="previewSnippet()" tabindex="3">
				</section>
				<section class="subsection">
					<!-- URI section -->
					<label class="listed" for="uri" title="Uniform Resource Identifier">URI<span class="asterix">*</span><br><span class="detail">Spaces automatically convert to hyphens</span></label><span id="uricount" class="counter" title="Character count"></span><br>
					<input id="uri" class="basic" type="text" name="uri" maxlength="70" placeholder="example format include target keyword" required="required" oninput="urlOptimize()" tabindex="4">
				</section>
				<section class="subsection">
					<!-- Meta description section -->
					<label class="listed" for="metadesc">Meta description<span class="asterix">*</span><br><span class="detail">Description of page frequently used by search engines</span></label><span id="metacount" class="counter" title="Character count, including spaces"></span><br>
					<textarea id="metadesc" class="txtformat basic" type="text" name="metadesc" data-stripe="number" rows="4" cols="35" minlength="120" maxlength="190" placeholder="Description of the page" required="required" oninput="previewSnippet()" tabindex="5"></textarea>
				</section>
				<section id="mobile" class="basic">
					<p>Mobile preview</p>
					<label class="prechange">
						<input id="switch" type="checkbox" name="switch">
						<span class="move bit"></span>
					</label>
				</section>
				<div id="snippet" class="basic" style="display: block;">
					<!-- Search preview section -->
					<h3>Google Search snippet preview</h3>
					<!--For dynamically generated content-->
					<div class="r_col">
						<div id="r_title">
							<h3><a id="snippettitle">Page title shows here</a></h3>
						</div>
						<div class="_g">
							<div id="r_url">
								<cite id="snippeturi">https://www.superkeywordy.com</cite>
							</div>
							<div id="r_metadesc">
								<p><span id="snippetdesc">Meta description displays here.</span></p>
							</div>
						</div>
					</div>
				</div>
				<div id="mobile_snippet" class="basic" style="display: none;">
					<!-- Mobile search preview section -->
					<h3>Google Search snippet preview (mobile-friendly)</h3>
					<!--For dynamically generated content-->
					<div class="mobile_frame">
						<div id="mobile-friendly">
							<div class="m_col">
								<a class="separator">
									<div id="m_title">
										<h3><span id="mobiletitle">Page title shows here</span></h3>
									</div>
									<div id="m_url">
										<cite id="mobileuri">https://www.superkeywordy.com</cite>
									</div>
								</a>
								<hr class="m_hr">
								<div id="m_metadesc">
									<p><span id="mobiledesc">Meta description displays here!</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="superior">
				<section class="subsection">
					<!-- Heading 1 section -->
					<label class="listed" for="heading1">Main heading<span class="asterix">*</span></label><span id="headingcount" class="counter" title="Word count"></span><br>
					<input id="heading1" class="basic" type="text" name="heading1" placeholder="Heading of the page: <h1>" required="required" tabindex="6">
				</section>
				<section class="subsection">
					<!-- Body text section -->
					<label class="listed" for="textbody">Body text<span class="asterix">*</span></label><span id="contentcount" class="counter" title="Word count"></span><br>
					<textarea id="textbody" class="txtformat basic" type="text" name="textbody" data-stripe="number" rows="4" cols="50" minlength="300" placeholder="Content of the page" required="required" tabindex="7"></textarea>
				</section>
			</section>
			<section class="superior">
				<div id="_seo">
					<!--Check SEO button-->
					<button id="checkseo" class="fx-button" onclick="ga('send', 'event', 'Checked on-page SEO');" type="button" tabindex="8">Check SEO</button>
					<!-- Download on-page content -->
					<a id="download-content" class="fx-button" href="" onclick="download_on_page_csv()" download="on-page-seo_superkeywordy.csv">Download content</a>
				</div>
			</section>
		</fieldset>
	</form>
<aside id="kw_analytics">
		<table id="_seoresults">
			<caption>Keyword analytics</caption>
			<tbody>
				<tr>
					<th class="stats" colspan="3">Primary keyword <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">Primary keyword is the broad keyword or subject of the page.</span></span><span id="note-prime" class="note-it"></span></th>
				</tr>
				<tr>
					<th class="statistics">Keyword count <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">The number of times the keyword appears in the following: title, URI, meta description, main heading and body text.</span></span></th>
					<th class="statistics">Total word count <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">Total number of words in the following: title, URI, meta description, main heading and body text.</span></span></th>
					<th class="statistics">Keyword density <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">% rate: number of times the primary keyword appears in all 6 sections.</span></span></th>
				</tr>
				<tr>
					<td id="tkcount" class="metrics"></td>
					<td id="totalcount" class="metrics"></td>
					<td id="tkdensity" class="metrics">%</td>
				</tr>
				<tr>
					<th class="statistics" colspan="3">Head-section analysis <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">Analyzes keyword presence in the tags of the head section.</span></span></th>
				</tr>
				<tr>
					<td colspan="2"><span id="result1" class="resh"></span></td>
				</tr>
				<tr>
					<td colspan="2"><span id="result2" class="resh"></span></td>
				</tr>
				<tr>
					<td colspan="2"><span id="result3" class="resh"></span></td>
				</tr>
				<tr>
					<td colspan="2"><span id="result4" class="resh"></span></td>
				</tr>
				<tr>
					<td colspan="2"><span id="result5" class="resh"></span></td>
				</tr>
				<tr>
					<th class="statistics" colspan="3">Body-text analysis <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">Analyzes keyword presence in the body text.</span></span></th>
				</tr>
				<tr>
					<td id="pkfirst" colspan="3"></td>
				</tr>
				<tr>
					<th class="stats statistics" colspan="3">Secondary keyword <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">Secondary keyword modifies the primary, extends or is related to it.</span></span><span id="note-nonprime" class="note-it"></span></th>
				</tr>
				<tr>
					<th class="statistics" colspan="2">Keyword count</th>
					<!-- <th>Total word count</th> -->
					<th class="statistics">Keyword density <span class="info_icon tool1 tooltip">&#9432;<span class="tooltipinfo">% rate: number of times the secondary keyword appears in all 6 sections.</span></span></th>
				</tr>
				<tr>
					<td id="tkcount2" class="metrics"></td>
					<td id="totalcount2" class="metrics"></td>
					<td id="tkdensity2" class="metrics">%</td>
				</tr>
				<tr>
					<th class="statistics" colspan="3">Head-section analysis</th>
				</tr>
				<tr>
					<td colspan="2"><span id="result6" class="resh"></span></td>
				</tr>
				<tr>
					<td colspan="2"><span id="result7" class="resh"></span></td>
				</tr>
				<tr>
					<td colspan="2"><span id="result8" class="resh"></span></td>
				</tr>
				<tr>
					<td colspan="2"><span id="result9" class="resh"></span></td>
				</tr>
				<tr>
					<td colspan="2"><span id="result10" class="resh"></span></td>
				</tr>
				<tr>
					<th class="statistics" colspan="3">Body-text analysis</th>
				</tr>
				<tr>
					<td id="skfirst" colspan="3"></td>
				</tr>
				<tr>
					<th class="stats statistics" colspan="3">Target keyword [exact match only]<span id="exact-match" class="note-it"></span><br><small class="fact">When primary and secondary keywords appear together</small></th>
				</tr>
				<tr>
					<th class="statistics" colspan="2">Keyword count</th>
					<!-- <th>Total word count</th> -->
					<th class="statistics">Keyword density</th>
				</tr>
				<tr>
					<td id="tkcount3" class="metrics"></td>
					<td id="totalcount3" class="metrics"></td>
					<td id="tkdensity3" class="metrics">%</td>
				</tr>
				<tr>
					<th class="statistics" colspan="3">Body text analysis</th>
				</tr>
				<tr>
					<td id="trgfirst" colspan="3"></td>
				</tr>
				<tr>
					<td id="bodywordcount" colspan="3"></td>
				</tr>
				<tr>
					<th class="stats statistics" colspan="3">Top 20 words<br><small class="fact">20 most frequent words in the main heading and body text</small></th>
				</tr>
				<tr>
					<th class="statistics">Count</th>
					<th class="statistics">Word</th>
					<th class="statistics">Density</th>
				</tr>
				<tr>
					<td id="freqCount" class="fact"></td>
					<td id="topwords" class="fact"></td>
					<td id="topwordDensity" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount1" class="fact"></td>
					<td id="topwords1" class="fact"></td>
					<td id="topwordDensity1" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount2" class="fact"></td>
					<td id="topwords2" class="fact"></td>
					<td id="topwordDensity2" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount3" class="fact"></td>
					<td id="topwords3" class="fact"></td>
					<td id="topwordDensity3" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount4" class="fact"></td>
					<td id="topwords4" class="fact"></td>
					<td id="topwordDensity4" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount5" class="fact"></td>
					<td id="topwords5" class="fact"></td>
					<td id="topwordDensity5" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount6" class="fact"></td>
					<td id="topwords6" class="fact"></td>
					<td id="topwordDensity6" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount7" class="fact"></td>
					<td id="topwords7" class="fact"></td>
					<td id="topwordDensity7" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount8" class="fact"></td>
					<td id="topwords8" class="fact"></td>
					<td id="topwordDensity8" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount9" class="fact"></td>
					<td id="topwords9" class="fact"></td>
					<td id="topwordDensity9" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount10" class="fact"></td>
					<td id="topwords10" class="fact"></td>
					<td id="topwordDensity10" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount11" class="fact"></td>
					<td id="topwords11" class="fact"></td>
					<td id="topwordDensity11" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount12" class="fact"></td>
					<td id="topwords12" class="fact"></td>
					<td id="topwordDensity12" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount13" class="fact"></td>
					<td id="topwords13" class="fact"></td>
					<td id="topwordDensity13" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount14" class="fact"></td>
					<td id="topwords14" class="fact"></td>
					<td id="topwordDensity14" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount15" class="fact"></td>
					<td id="topwords15" class="fact"></td>
					<td id="topwordDensity15" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount16" class="fact"></td>
					<td id="topwords16" class="fact"></td>
					<td id="topwordDensity16" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount17" class="fact"></td>
					<td id="topwords17" class="fact"></td>
					<td id="topwordDensity17" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount18" class="fact"></td>
					<td id="topwords18" class="fact"></td>
					<td id="topwordDensity18" class="fact"></td>
				</tr>
				<tr>
					<td id="freqCount19" class="fact"></td>
					<td id="topwords19" class="fact"></td>
					<td id="topwordDensity19" class="fact"></td>
				</tr>
			</tbody>
		</table>
		<table id="table">
		</table>
		<div class="rules">
			<button class="drop">Best practice guidelines<span class="plus">&times;</span></button>
			<div class="guidelines">
				<p><span class="asterix">*</span>&nbsp;Required fields</p>
				<ol>
					<li><span class="subject">Target keyword</span><br>The target keyword is the main subject of the page. It is a broad-match phrase that should match a popular / relevant search term.
						<ul>
							<li><strong>Must be unique</strong>, relative to your website.</li>
							<li>Conduct keyword research to determine your target keyword.</li>
						</ul>
					</li>
					<li><span class="subject">Title</span><br>Include target keyword in the title; use between 55 and 70 characters (including spaces).</li>
					<li><span class="subject">URI</span><br>Include target keyword in the URI. URIs are case-sensitive; use lowercase only.
						<ul>
							<li>This field automatically converts uppercase to lowercase and spaces are replaced with hyphens.</li>
						</ul>
					</li>
					<li><span class="subject">Meta description</span><br>Include target keyword in the meta description; use between 120 and 190 characters (including spaces).</li>
					<li><span class="subject">Main heading</span><br>This is the <pre>&lt;h1&gt;</pre> tag. Include target keyword in the main heading of the page, only once. Keep headings short and concise.</li>
					<li><span class="subject">Body text</span><br>Include target keyword in the body text, i.e. the main content of the page.
						<ul>
							<li>There is no optimal content length. Compare word counts to your competitors' content. Quality is <em>key</em>, not quantity!</li>
							<li>If your <strong>keyword density</strong> is more than 2.5%, consider reducing it; avoid <strong>keyword stuffing</strong>!
								<ul>
									<li>Keyword density is the rate at which the keyword appears on the page<br><br><pre>%Rate = keyword count / content length</pre></li>
								</ul>
							</li>
							<li><strong>First segment</strong>: first 200 <em>character positions</em> in a line, starting from zero.
								<ul>
									<li>First segment is typically the first sentence of the body text.</li>
								</ul>
							</li>
						</ul>
					</li>
				</ol>
			</div>
		</div>
	</aside>
</main>
<script src="/functions/js/keywordy.js"></script>
<div id="warning" class="modal">
	<section class="mode">
		<div class="titlebar">
			<span class="close cross">&times;</span>
			<h3 class="modalhead">Important!</h3>
		</div>
		<p>Enter a title to begin on-page SEO analysis.</p>
	</section>
</div>
<div id="progbar" class="modal">
	<div id="spinloader">
	</div>
</div>
<?php
include_once($footer);
?>