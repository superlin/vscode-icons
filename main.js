function iconClass(e){
  var name = e.name.toLowerCase(),
    folderClass = "folder-icon",
    fileClass = "text-file-icon",
    folderEqualMap = {
      '.git':1, '.bundle':1, '.meteor':1
    },
    equalMap = {
      'bashrc':1, '.bashrc': 1, 'bash_login':1, '.bash_login':1, 'bash_profile':1, '.bash_profile':1,
      '.zshrc':1, '.fishrc':1, '_vimrc':1, 'gvimrc':1, 'nvimrc':1, 'vimrc':1,
      'composer.json':1, 'gruntfile.js':1, 'gruntfile.coffee':1, 'gulpfile.js':1,
      'gulpfile.coffee':1, 'gulpfile.babel.js':1, 'ionic.project':1 , 'apache.conf':1, 'apache2.conf':1, 'httpd.conf':1,
      'readme.md':1, '.mailmap':1, '.lesshintrc':1, '.csscomb.json':1, '.htaccess':1, '.htpasswd':1,
      'nodemon.json':1, '.nodemonignore':1, '.npmrc':1, '.npmignore':1, 'npm-debug.log':1, 'package.json':1,
      '.bowerrc':1, 'bower.json':1, 'capfile':1, 'guardfile':1, '.ruby-gemset':1, '.ruby-version':1, '.rspec':1,
      'rails':1,
    },
    endMap = ['makefile', 'mix.exs', 'mix.ex', '.html.eex', '.json.eex', '.blade.php', 'gemfile.lock',
      '_spec.rb', '.react.js', 'build.boot', 'project.clj', '.js.erb', '.coffee.erb', '.html.erb', 'cargo.toml',
      'cargo.lock', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'
    ],
    index, ele, ci;

  if (e.isDirectory) {

    if (name in folderEqualMap) {
      folderClass += " folder-icon-" + buildClass(name);
    }
    return folderClass;

  } else if (name in equalMap) {

    fileClass += " text-file-" + buildClass(name);
    return fileClass;

  } else {

    for (index = 0; index < endMap.length; index++) {
      ele = endMap[index];
      if (name.endsWith(ele)) {
        fileClass += " text-file-" + buildClass(ele);
        break;
      }
    }

    if (index >= endMap.length) {
      ci = name.lastIndexOf('.');
      if (ci >= 0) {
        fileClass += " text-file-" + buildClass(name.slice(ci));
      }
    }

    return fileClass;
  }

  function buildClass(str) {
    str = str[0] === '.' ? str.slice(1) : str;
    str = str.replace(/\./, '-');
    return str;
  }
}