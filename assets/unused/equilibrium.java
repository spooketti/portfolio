package assets.unused;
import java.util.Scanner;

public class equilibrium {
    public static void main(String[] args)
    {
        Scanner userInput = new Scanner(System.in);
        System.out.println("Number of reactants");
        int r = Integer.parseInt(userInput.nextLine());
        System.out.println("Number of Products");
        int p = Integer.parseInt(userInput.nextLine());
        userInput.close();
        int[] equalRatio = evalEquil(r,p);
        System.out.println(equalRatio[0]);
        System.out.println(equalRatio[1]);
    }

    public static int[] evalEquil(int r, int p)
    {
        int oldR = r;
        int oldP = p;

        p += r/2;
        r -= r/2;
        r += p/4;
        p -= p/4;
        while(oldR != r && oldP != p)
        {
            oldR =r;
            oldP = p;
            p += r/2;
            r -= r/2;
            r += p/4;
            p -= p/4;
        }
        int[] rp = {r,p};
        return rp;
    }
}
