## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Making simple edits](#making-simple-edits)
- [Some references](#some-references)
- [Installing](#installing)
  - [Local setup on Windows 10/11](#local-setup-on-windows-1011)
  - [Local setup on Mac](#local-setup-on-mac)
  - [Git commands](#git-commands)
- [Instructions](#instructions)
  - [Research](#research)
  - [People](#people)
  - [Publications](#publications)
  - [Presentations](#presentations)
  - [Theming](#theming)
- [FAQ](#faq)

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

---

### Local setup on Mac

---

### Git commands

When you make some major changes to the website, you can follow these steps:

1. Clone the repository to local.
```
git clone [url]
```
![URL](readme_preview/URL.png)

2. Check whether the local repository is up to date before each change.
```
git remote show origin
```

3. If not, fetch and merge changes to your local directory.
```
git pull
```

4. After making changes, push them to the remote repository.
```
git add .
git commit -m "[Descriptions of your changes]"
git push
```

## Instructions

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

### Theming

A variety of beautiful theme colors have been selected for you to choose from. The default is purple, but you can quickly change it by editing the `--global-theme-color` variable in the `_sass/_themes.scss` file. Other color variables are listed there as well. The stock theme color options available can be found at [\_sass/\_variables.scss](_sass/_variables.scss). You can also add your own colors to this file assigning each a name for ease of use across the template.

## FAQ

For frequently asked questions, please refer to [FAQ.md](FAQ.md).
