# vagngx
Simple steps to setup nginx server on local machine

Vagrant makes it easy to simulate the cloud environment on a local machine

- Install virtualbox
- install vagrant
- create the project folder and cd into it
- run vagrant init
- change the value of config.vm.box method to the os you want to use
- set config.vm.network to set the guest and host network. You can also set the private or public network.
- ssh into vagrant with `vagrant ssh`
- run `grep "root" -R /etc/nginx/sites-enabled` to check the root folder of your nginx and then `exit` to go out of the ssh
- set config.vm.synced_folder to specify the root path and the the nginx directory gotten from the command above
- config.vm.provision to configure the installations that are needed. this can also be separated into another file
- run `vagrant up` and start the server
- run the app on the specified ip address from your browser

