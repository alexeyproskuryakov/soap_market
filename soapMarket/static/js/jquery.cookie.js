  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-cookie/jquery.cookie.js at master · carhartl/jquery-cookie</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="I9ByJOdgwfVbvmx9ueyqABg4abhC/ZvsTZ2/pFlLvnY=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-053ef9e31e0948b442ab7b687f967814a7d7f000.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-f5fdcb1d2e599664c34142dd912464640ce459d4.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-5dcdaf734c8092261f37e6534c8f114696d913a9.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-c45736bc9622ede1d9e87034c4341cda7f90bed5.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/carhartl/jquery-cookie/blob/cefb0c399960553edae76f91f9fc5470a1c3bc04/jquery.cookie.js'>
    <meta property="og:title" content="jquery-cookie"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/carhartl/jquery-cookie"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/ae8c6ae27f6b9d5707bc5a32d0fb21a6?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery-cookie - A simple, lightweight jQuery plugin for reading, writing and deleting cookies"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="carhartl/jquery-cookie"/>

    <meta name="description" content="jquery-cookie - A simple, lightweight jQuery plugin for reading, writing and deleting cookies" />

  <link href="https://github.com/carhartl/jquery-cookie/commits/master.atom" rel="alternate" title="Recent Commits to jquery-cookie:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              <div class="topsearch command-bar-activated ">
      <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="AlexeyProskuryakov" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
  <ul class="top-nav">
      <li class="explore"><a href="https://github.com/explore">Explore</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
    <li><a href="http://help.github.com">Help</a></li>
  </ul>
</div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/AlexeyProskuryakov" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/2ff146ab9a704bb6d9884ac319e514f6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> AlexeyProskuryakov
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="I9ByJOdgwfVbvmx9ueyqABg4abhC/ZvsTZ2/pFlLvnY=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="268027" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container js-select-menu-pane">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/carhartl/jquery-cookie/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/carhartl/jquery-cookie/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/carhartl/jquery-cookie/stargazers">2,906</a>
    </li>

        <li>
          <a href="/carhartl/jquery-cookie/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/carhartl/jquery-cookie/network" class="social-count">1,013</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/carhartl" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">carhartl</span>
                  </a></span> /
                <strong><a href="/carhartl/jquery-cookie" class="js-current-repository">jquery-cookie</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/carhartl/jquery-cookie" class="selected" highlight="[:repo_source, :repo_downloads, :repo_commits, :repo_tags, :repo_branches]">Code</a></li>
    <li><a href="/carhartl/jquery-cookie/network" highlight="[:repo_network]">Network</a></li>
    <li><a href="/carhartl/jquery-cookie/pulls" highlight="[:repo_pulls]">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/carhartl/jquery-cookie/issues" highlight="[:repo_issues]">Issues <span class='counter'>1</span></a></li>

      <li><a href="/carhartl/jquery-cookie/wiki" highlight="[:repo_wiki]">Wiki</a></li>


    <li><a href="/carhartl/jquery-cookie/graphs" highlight="[:repo_graphs, :repo_contributors]">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/carhartl/jquery-cookie/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">5</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/carhartl/jquery-cookie/blob/master/jquery.cookie.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/carhartl/jquery-cookie/blob/v1.3.1/jquery.cookie.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3.1" rel="nofollow" title="v1.3.1">v1.3.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/carhartl/jquery-cookie/blob/v1.3.0/jquery.cookie.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3.0" rel="nofollow" title="v1.3.0">v1.3.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/carhartl/jquery-cookie/blob/v1.2.0/jquery.cookie.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2.0" rel="nofollow" title="v1.2.0">v1.2.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/carhartl/jquery-cookie/blob/v1.1/jquery.cookie.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1" rel="nofollow" title="v1.1">v1.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/carhartl/jquery-cookie/blob/v1.0/jquery.cookie.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0" rel="nofollow" title="v1.0">v1.0</a>
              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/carhartl/jquery-cookie" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/carhartl/jquery-cookie/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/carhartl/jquery-cookie/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:15a0187619304aa72b57b23a1af27405 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:15a0187619304aa72b57b23a1af27405 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/carhartl/jquery-cookie" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">jquery-cookie</span></a></span></span> / <strong class="final-path">jquery.cookie.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery.cookie.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/carhartl/jquery-cookie/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/ae8c6ae27f6b9d5707bc5a32d0fb21a6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/carhartl" rel="author">carhartl</a></span>
    <time class="js-relative-date" datetime="2013-01-30T01:44:25-08:00" title="2013-01-30 01:44:25">January 30, 2013</time>
    <div class="commit-title">
        <a href="/carhartl/jquery-cookie/commit/cefb0c399960553edae76f91f9fc5470a1c3bc04" class="message">When attempting to read a cookie with json=true and the JSON string i…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="carhartl" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=carhartl"><img height="20" src="https://secure.gravatar.com/avatar/ae8c6ae27f6b9d5707bc5a32d0fb21a6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="FagnerMartinsBrack" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=FagnerMartinsBrack"><img height="20" src="https://secure.gravatar.com/avatar/750783d32a1edb8e23b56fb21f34a936?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kswedberg" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=kswedberg"><img height="20" src="https://secure.gravatar.com/avatar/0f6923fc391653284355a60fb4974e86?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tomkins" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=tomkins"><img height="20" src="https://secure.gravatar.com/avatar/0a5e77e53a4c3d19133e7a005d36ab95?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="duncansmart" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=duncansmart"><img height="20" src="https://secure.gravatar.com/avatar/13ead10356c893aead42be91b5cdcc01?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ae8c6ae27f6b9d5707bc5a32d0fb21a6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/carhartl">carhartl</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/750783d32a1edb8e23b56fb21f34a936?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/FagnerMartinsBrack">FagnerMartinsBrack</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0f6923fc391653284355a60fb4974e86?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kswedberg">kswedberg</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0a5e77e53a4c3d19133e7a005d36ab95?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/tomkins">tomkins</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/13ead10356c893aead42be91b5cdcc01?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/duncansmart">duncansmart</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/carhartl/jquery-cookie/blob/cefb0c399960553edae76f91f9fc5470a1c3bc04/jquery.cookie.js" data-title="jquery-cookie/jquery.cookie.js at master · carhartl/jquery-cookie · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>93 lines (76 sloc)</span>
                <span>2.247 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/carhartl/jquery-cookie/edit/master/jquery.cookie.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/carhartl/jquery-cookie/raw/master/jquery.cookie.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/carhartl/jquery-cookie/blame/master/jquery.cookie.js" class="button minibutton ">Blame</a>
                  <a href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * jQuery Cookie Plugin v1.3.1</span></div><div class='line' id='LC3'><span class="cm"> * https://github.com/carhartl/jquery-cookie</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2013 Klaus Hartl</span></div><div class='line' id='LC6'><span class="cm"> * Released under the MIT license</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>		<span class="c1">// AMD. Register as anonymous module.</span></div><div class='line' id='LC11'>		<span class="nx">define</span><span class="p">([</span><span class="s1">&#39;jquery&#39;</span><span class="p">],</span> <span class="nx">factory</span><span class="p">);</span></div><div class='line' id='LC12'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC13'>		<span class="c1">// Browser globals.</span></div><div class='line' id='LC14'>		<span class="nx">factory</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC15'>	<span class="p">}</span></div><div class='line' id='LC16'><span class="p">}(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>	<span class="kd">var</span> <span class="nx">pluses</span> <span class="o">=</span> <span class="sr">/\+/g</span><span class="p">;</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>	<span class="kd">function</span> <span class="nx">raw</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>		<span class="k">return</span> <span class="nx">s</span><span class="p">;</span></div><div class='line' id='LC22'>	<span class="p">}</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>	<span class="kd">function</span> <span class="nx">decoded</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>		<span class="k">return</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">pluses</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">));</span></div><div class='line' id='LC26'>	<span class="p">}</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="kd">function</span> <span class="nx">converted</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="k">if</span> <span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;&quot;&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>			<span class="c1">// This is a quoted cookie as according to RFC2068, unescape</span></div><div class='line' id='LC31'>			<span class="nx">s</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\&quot;/g</span><span class="p">,</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\\\/g</span><span class="p">,</span> <span class="s1">&#39;\\&#39;</span><span class="p">);</span></div><div class='line' id='LC32'>		<span class="p">}</span></div><div class='line' id='LC33'>		<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC34'>			<span class="k">return</span> <span class="nx">config</span><span class="p">.</span><span class="nx">json</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="o">:</span> <span class="nx">s</span><span class="p">;</span></div><div class='line' id='LC35'>		<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">er</span><span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC36'>	<span class="p">}</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>	<span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>		<span class="c1">// write</span></div><div class='line' id='LC41'>		<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'>			<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">config</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expires</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>				<span class="kd">var</span> <span class="nx">days</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expires</span><span class="p">,</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expires</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC46'>				<span class="nx">t</span><span class="p">.</span><span class="nx">setDate</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="nx">days</span><span class="p">);</span></div><div class='line' id='LC47'>			<span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>			<span class="nx">value</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">json</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="nb">String</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>			<span class="k">return</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC52'>				<span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">key</span><span class="p">),</span> <span class="s1">&#39;=&#39;</span><span class="p">,</span> <span class="nx">config</span><span class="p">.</span><span class="nx">raw</span> <span class="o">?</span> <span class="nx">value</span> <span class="o">:</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">value</span><span class="p">),</span></div><div class='line' id='LC53'>				<span class="nx">options</span><span class="p">.</span><span class="nx">expires</span> <span class="o">?</span> <span class="s1">&#39;; expires=&#39;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expires</span><span class="p">.</span><span class="nx">toUTCString</span><span class="p">()</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="c1">// use expires attribute, max-age is not supported by IE</span></div><div class='line' id='LC54'>				<span class="nx">options</span><span class="p">.</span><span class="nx">path</span>    <span class="o">?</span> <span class="s1">&#39;; path=&#39;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">path</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC55'>				<span class="nx">options</span><span class="p">.</span><span class="nx">domain</span>  <span class="o">?</span> <span class="s1">&#39;; domain=&#39;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">domain</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC56'>				<span class="nx">options</span><span class="p">.</span><span class="nx">secure</span>  <span class="o">?</span> <span class="s1">&#39;; secure&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC57'>			<span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">));</span></div><div class='line' id='LC58'>		<span class="p">}</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>		<span class="c1">// read</span></div><div class='line' id='LC61'>		<span class="kd">var</span> <span class="nx">decode</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">raw</span> <span class="o">?</span> <span class="nx">raw</span> <span class="o">:</span> <span class="nx">decoded</span><span class="p">;</span></div><div class='line' id='LC62'>		<span class="kd">var</span> <span class="nx">cookies</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;; &#39;</span><span class="p">);</span></div><div class='line' id='LC63'>		<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">key</span> <span class="o">?</span> <span class="kc">undefined</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC64'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">cookies</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC65'>			<span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">cookies</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">);</span></div><div class='line' id='LC66'>			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">decode</span><span class="p">(</span><span class="nx">parts</span><span class="p">.</span><span class="nx">shift</span><span class="p">());</span></div><div class='line' id='LC67'>			<span class="kd">var</span> <span class="nx">cookie</span> <span class="o">=</span> <span class="nx">decode</span><span class="p">(</span><span class="nx">parts</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">));</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>			<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">===</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC70'>				<span class="nx">result</span> <span class="o">=</span> <span class="nx">converted</span><span class="p">(</span><span class="nx">cookie</span><span class="p">);</span></div><div class='line' id='LC71'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC72'>			<span class="p">}</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>				<span class="nx">result</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">converted</span><span class="p">(</span><span class="nx">cookie</span><span class="p">);</span></div><div class='line' id='LC76'>			<span class="p">}</span></div><div class='line' id='LC77'>		<span class="p">}</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>		<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC80'>	<span class="p">};</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>	<span class="nx">config</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>	<span class="nx">$</span><span class="p">.</span><span class="nx">removeCookie</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>		<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC86'>			<span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span> <span class="nx">expires</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span> <span class="p">}));</span></div><div class='line' id='LC87'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC88'>		<span class="p">}</span></div><div class='line' id='LC89'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC90'>	<span class="p">};</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'><span class="p">}));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1359524229" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04381s from fe15.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/carhartl/jquery-cookie/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04424' data-host='fe15'></span>
    
  </body>
</html>

