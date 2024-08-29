using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicTree
{
    //              v make sure to add this to get rid of the rest of the tree errors 
     class TreeNode<T>
        //Why did we do this you may ask?
        //<T> --> means --> Generic data type, it will change it as its needed
    {
        //data //parent //child

        public T Data { get; set; }
        public TreeNode<T> Parent { get; set; }
        //holds a list of child nodes to the tree
        public List<TreeNode<T>> Children { get; set; }

        //set the base height
        public int GetHeight()
        {
            int height = 1;
            TreeNode<T> current = this;

            //while statement to ensure the parent is not null
            while (current.Parent != null)
            {
                height++;
                current = current.Parent;
            }
            return height;

        }
    }
}
