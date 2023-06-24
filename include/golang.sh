 #!/bin/bash
 # Author:  yeho <lj2007331 AT gmail.com>
 # BLOG:  https://linuxeye.com
 #
 # Notes: OneinStack for CentOS/RedHat 7+ Debian 9+ and Ubuntu 16+
 #
 # Project home page:
 #       https://oneinstack.com
 #       https://github.com/oneinstack/oneinstack

 Install_Golang() {
   pushd ${oneinstack_dir}/src > /dev/null
   tar xzf go${golang_ver}.linux-amd64.tar.gz
   /bin/mv go ${golang_install_dir}
   mkdir -p ~/.go
   if [ -e "${golang_install_dir}/bin/go" ]; then
     cat > /etc/profile.d/golang.sh << EOF
 export GOROOT=${golang_install_dir}
 export GOPATH=/root/.go
 export PATH=\$GOROOT/bin:\$GOPATH/bin:\$PATH
 EOF
     . /etc/profile
     ${GOROOT}/bin/go env -w GO111MODULE=on
     ${GOROOT}/bin/go env -w GOPROXY=https://goproxy.cn,direct
     ${GOROOT}/bin/go version
     echo "${CSUCCESS}Golang installed successfully! ${CEND}"
   else
     echo "${CFAILURE}Golang install failed, Please contact the author! ${CEND}" && grep -Ew 'NAME|ID|ID_LIKE|VERSION_ID|PRETTY_NAME' /etc/os-release
     kill -9 $$; exit 1;
   fi
   popd > /dev/null
 }

 Uninstall_Golang() {
   if [ -e "${golang_install_dir}" ]; then
     rm -rf ${golang_install_dir} /etc/profile.d/golang.sh
     echo "${CMSG}Golang uninstall completed! ${CEND}"
   fi
 }
