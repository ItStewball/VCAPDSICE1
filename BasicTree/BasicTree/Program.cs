using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicTree
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //now pull it all together

            Tree<int> tree = new Tree<int>();

            tree.Root = new TreeNode<int>() { Data = 100 };

            tree.Root.Children = new List<TreeNode<int>>
            {
                new TreeNode<int> { Data = 50, Parent = tree.Root },
                new TreeNode<int> { Data = 1, Parent = tree.Root },
                new TreeNode<int> { Data = 150, Parent = tree.Root }

            };
            
            
            //subtree
            tree.Root.Children[2].Children = new List<TreeNode<int>>
            {
                new TreeNode<int> { Data = 30, Parent = tree.Root.Children[2] },
                new TreeNode<int> { Data = 8, Parent = tree.Root.Children[2] }
            };


            tree.PrintTree(tree.Root);

            
        }
    }
}
