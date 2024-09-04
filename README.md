# TypeScript in Your Project #
Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently.

via npm
TypeScript is available as a package on the npm registry available as "typescript".

You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.

npm install typescript --save-dev

npm yarn pnpm
All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:

npx tsc

npm yarn pnpm

with Visual Studio 
For most project types, you can get TypeScript as a package in Nuget for your MSBuild projects, for example an ASP.NET Core app.

When using Nuget, you can install TypeScript through Visual Studio using:

The Manage NuGet Packages window (which you can get to by right-clicking on a project node)
The Nuget Package Manager Console (found in Tools > NuGet Package Manager > Package Manager Console) and then running:
Install-Package Microsoft.TypeScript.MSBuild
For project types which don't support Nuget, you can use the TypeScript Visual Studio extension. You can install the extension using Extensions > Manage Extensions in Visual Studio.

# Globally Installing TypeScript
It can be handy to have TypeScript available across all projects, often to test one-off ideas. Long-term, codebases should prefer a project-wide installation over a global install so that they can benefit from reproducible builds across different machines.

via npm
You can use npm to install TypeScript globally, this means that you can use the tsc command anywhere in your terminal.

To do this, run npm install -g typescript. This will install the latest version (currently 5.5).

via Visual Studio Marketplace
You can install TypeScript as a Visual Studio extension, which will allow you to use TypeScript across many MSBuild projects in Visual Studio.

The latest version is available in the Visual Studio Marketplace.
