# OpenShift configuration with Kustomize

Resource configuration and secret consumption for OpenShift projects are managed
using [`kustomize`](https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/).

## Setup

1. Populate secrets.

    Sensitive values and files are located in Dropbox in the 
    `TL Security files -> Canvas App Explorer -> secrets`
    Dropbox folder. Merge the `base` and `overlays` directories with their equivalents in the `kustomize`
    directory in your local repository.

2. Install `kustomize`.

    You can install Kustomize using the command from the
    [website](https://kubectl.docs.kubernetes.io/installation/kustomize/binaries/),
    and adding version 4.5.5 (what is supported for now) as an argument.
    ```
    curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | bash -s 4.5.5
    ```

    This will download the binary to the local directory. Ideally you'd move this somewhere on your path.

## Updating a project

1. Login and select the desired project using `oc`.
    ```
    oc login ...
    oc project canvas-app-explorer-dev
    ```

2. Fron the `service` directory, use `kustomize build` on an overlay directory 
and pipe the result to `oc apply`.
    ```
    kustomize build overlays/dev | oc apply -f - --validate
    ```

To make changes to a project's ingress (e.g. updating certificates),
you may need to first delete the ingress before running `kustomize build`.
```
oc delete ingress some-ingress-name
```
