## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Making simple edits](#making-simple-edits)
- [Some references](#some-references)
- [Installing](#installing)
  - [Local setup on Windows 10/11](#local-setup-on-windows-1011)
- [Features](#features)
  - [Research](#research)
  - [People](#people)
  - [Publications](#publications)
  - [Presentations](#presentations)
  - [Layouts](#layouts)
    - [The iconic style of Distill](#the-iconic-style-of-distill)
    - [Full support for math \& code](#full-support-for-math--code)
    - [Photos, Audio, Video and more](#photos-audio-video-and-more)
  - [Other features](#other-features)
    - [GitHub's repositories and user stats](#githubs-repositories-and-user-stats)
    - [Theming](#theming)
    - [Social media previews](#social-media-previews)
    - [Atom (RSS-like) Feed](#atom-rss-like-feed)
    - [Related posts](#related-posts)
    - [Code quality checks](#code-quality-checks)
- [FAQ](#faq)
- [Contributing](#contributing)
  - [Maintainers](#maintainers)
  - [All Contributors](#all-contributors)
- [Star History](#star-history)
- [License](#license)

## Making simple edits

If you are making simple edits and do not need to visualize the changes (locally on your own machine) before making the changes public, go ahead and directly edit the relevant files either directly in [https://github.com/caltech-netlab] or in your local repository and push the changes to github.

## Some references

Check out [this tutorial](https://www.taniarascia.com/make-a-static-website-with-jekyll/) to learn more about Jekyll. Why Jekyll? Read [Andrej Karpathy's blog post](https://karpathy.github.io/2014/07/01/switching-to-jekyll/). Some other original references: [INSTALL.md](INSTALL.md), [CUSTOMIZE.md](CUSTOMIZE.md).

## Installing

### Local setup on Windows 10/11

First, install [Git](https://git-scm.com/), [Visual Studio Code](https://code.visualstudio.com/download), and [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install). For WSL, choosing the distribution of Ubuntu is fine. You can use any terminal and run the following command:

```shell
bash
```

to start WSL. Then, install [Node.js](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl), [ImageMagick](https://learnubuntu.com/install-imagemagick/) and [Ruby & Jekyll](https://jekyllrb.com/docs/installation/windows/). After finishing the above installations, you can create a new Jekyll site and make it available on a local server, to determine if it works. Some commands you need can be seen [here](https://jekyllrb.com/docs/). Note that if you encounter any errors during the process, you can find some solutions on Google.

## Features

### Research

This Jekyll theme implements `collections` to let you break up your work into categories. The theme comes with two default collections, `news` and `projects`. We only use the `projects` collection to create our research page. The overview of research is edited in the [\_pages/projects.md](_pages/projects.md), and the other four subsections are located in the [\_projects](_projects) folder. The contents of research are written using only HTML.

Additionally, if you want to create new collections, edit the collections in the [\_config.yml](_config.yml) and create a corresponding folder and a landing page in the [\_pages](_pages) folder.

---

### People

You can show each member's short bio and profile picture on the people page. There are three steps. First, add the profile picture in the [assets/img/people/](assets/img/people/) directory. Then, store the short bio in a `.md` file in the [\_pages/descriptions/](_pages/descriptions/) directory. Finally, you can add the member information under the appropriate category in the [\_pages/profiles.md](_pages/profiles.md).

---

### Publications

The publications page is generated automatically from your BibTex bibliography. Simply edit the [\_bibliography/papers.bib](_bibliography/papers.bib). By default, the publications will be sorted by year, with the most recent displayed first. You can change this behavior and more in the `Jekyll Scholar` section in the [\_config.yml](_config.yml). Additionally, if you want to customize the look of the publications page, you can edit the [\_pages/publications.md](_pages/publications.md).

You just need to add some specific fields, as shown in the [\_bibliography/papers.bib](_bibliography/papers.bib). More supported fields can be found [here](https://github.com/alshedivat/al-folio).

---

### Presentations

The presentations page includes two parts, talks and misc writings, written using only HTML. If you have a new item to add, copy any existing item in [\_pages/presentations.md](_pages/presentations.md) and replace the key information in it.

---

### Layouts

**al-folio** comes with stylish layouts for pages and blog posts.

#### The iconic style of Distill

The theme allows you to create blog posts in the [distill.pub](https://distill.pub/) style:

[![Distill Preview](readme_preview/distill.png)](https://alshedivat.github.io/al-folio/blog/2021/distill/)

For more details on how to create distill-styled posts using `<d-*>` tags, please refer to [the example](https://alshedivat.github.io/al-folio/blog/2021/distill/).

#### Full support for math & code

**al-folio** supports fast math typesetting through [MathJax](https://www.mathjax.org/) and code syntax highlighting using [GitHub style](https://github.com/jwarby/jekyll-pygments-themes). Also supports [chartjs charts](https://www.chartjs.org/), [mermaid diagrams](https://mermaid-js.github.io/mermaid/#/), and [TikZ figures](https://tikzjax.com/).

<p align="center">
<a href="https://alshedivat.github.io/al-folio/blog/2015/math/" target="_blank"><img src="readme_preview/math.png" width=400></a>
<a href="https://alshedivat.github.io/al-folio/blog/2015/code/" target="_blank"><img src="readme_preview/code.png" width=400></a>
</p>

#### Photos, Audio, Video and more

Photo formatting is made simple using [Bootstrap's grid system](https://getbootstrap.com/docs/4.4/layout/grid/). Easily create beautiful grids within your blog posts and project pages, also with support for [video](https://alshedivat.github.io/al-folio/blog/2023/videos/) and [audio](https://alshedivat.github.io/al-folio/blog/2023/audios/) embeds:

<p align="center">
  <a href="https://alshedivat.github.io/al-folio/projects/1_project/">
    <img src="readme_preview/photos-screenshot.png" width="75%">
  </a>
</p>

---

### Other features

#### GitHub's repositories and user stats

**al-folio** uses [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) and [github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy) to display GitHub repositories and user stats on the `/repositories/` page.

[![Repositories Preview](readme_preview/repositories.png)](https://alshedivat.github.io/al-folio/repositories/)

Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories to the `/repositories/` page.

You may also use the following codes for displaying this in any other pages.

```html
<!-- code for GitHub users -->
{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %} {% include repository/repo_user.liquid username=user %} {% endfor %}
</div>
{% endif %}

<!-- code for GitHub trophies -->
{% if site.repo_trophies.enabled %} {% for user in site.data.repositories.github_users %} {% if site.data.repositories.github_users.size > 1 %}
<h4>{{ user }}</h4>
{% endif %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
</div>
{% endfor %} {% endif %}

<!-- code for GitHub repositories -->
{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %} {% include repository/repo.liquid repository=repo %} {% endfor %}
</div>
{% endif %}
```

---

#### Theming

A variety of beautiful theme colors have been selected for you to choose from. The default is purple, but you can quickly change it by editing the `--global-theme-color` variable in the `_sass/_themes.scss` file. Other color variables are listed there as well. The stock theme color options available can be found at [\_sass/\_variables.scss](_sass/_variables.scss). You can also add your own colors to this file assigning each a name for ease of use across the template.

---

#### Social media previews

**al-folio** supports preview images on social media. To enable this functionality you will need to set `serve_og_meta` to `true` in your [\_config.yml](_config.yml). Once you have done so, all your site's pages will include Open Graph data in the HTML head element.

You will then need to configure what image to display in your site's social media previews. This can be configured on a per-page basis, by setting the `og_image` page variable. If for an individual page this variable is not set, then the theme will fall back to a site-wide `og_image` variable, configurable in your [\_config.yml](_config.yml). In both the page-specific and site-wide cases, the `og_image` variable needs to hold the URL for the image you wish to display in social media previews.

---

#### Atom (RSS-like) Feed

It generates an Atom (RSS-like) feed of your posts, useful for Atom and RSS readers. The feed is reachable simply by typing after your homepage `/feed.xml`. E.g. assuming your website mountpoint is the main folder, you can type `yourusername.github.io/feed.xml`

---

#### Related posts

By default, there will be a related posts section on the bottom of the blog posts. These are generated by selecting the `max_related` most recent posts that share at least `min_common_tags` tags with the current post. If you do not want to display related posts on a specific post, simply add `related_posts: false` to the front matter of the post. If you want to disable it for all posts, simply set `enabled` to false in the `related_blog_posts` section in [\_config.yml](_config.yml).

---

#### Code quality checks

Currently, we run some checks to ensure that the code quality and generated site are good. The checks are done using GitHub Actions and the following tools:

- [Prettier](https://prettier.io/) - check if the formatting of the code follows the style guide
- [lychee](https://lychee.cli.rs/) - check for broken links
- [Axe](https://github.com/dequelabs/axe-core) (need to run manually) - do some accessibility testing

We decided to keep `Axe` runs manual because fixing the issues are not straightforward and might be hard for people without web development knowledge.

## FAQ

For frequently asked questions, please refer to [FAQ.md](FAQ.md).

## Contributing

Contributions to al-folio are very welcome! Before you get started, please take a look at [the guidelines](CONTRIBUTING.md).

If you would like to improve documentation or fix a minor inconsistency or bug, please feel free to send a PR directly to `master`. For more complex issues/bugs or feature requests, please open an issue using the appropriate template.

### Maintainers

Our most active contributors are welcome to join the maintainers team. If you are interested, please reach out!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://maruan.alshedivat.com"><img src="https://avatars.githubusercontent.com/u/2126561?v=4" width="100px;" alt=""/><br /><sub><b>Maruan</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://rohandebsarkar.github.io"><img src="https://avatars.githubusercontent.com/u/50144004?v=4" width="100px;" alt=""/><br /><sub><b>Rohan Deb Sarkar</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://amirpourmand.ir"><img src="https://avatars.githubusercontent.com/u/32064808?v=4" width="100px;" alt=""/><br /><sub><b>Amir Pourmand</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://george-gca.github.io/"><img src="https://avatars.githubusercontent.com/u/31376482?v=4" width="100px;" alt=""/><br /><sub><b>George</b></sub></a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### All Contributors

<a href="https://contrib.rocks">
  <img src="https://contrib.rocks/image?repo=alshedivat/al-folio" />
</a>

## Star History

<a href="https://star-history.com/#alshedivat/al-folio&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=alshedivat/al-folio&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=alshedivat/al-folio&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=alshedivat/al-folio&type=Date" />
  </picture>
</a>

## License

The theme is available as open source under the terms of the [MIT License](https://github.com/alshedivat/al-folio/blob/master/LICENSE).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](https://liabogoev.com) and under the MIT license). Since then, it got a full re-write of the styles and many additional cool features.
