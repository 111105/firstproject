# firstprojecthttps://github.com/111105/firstproject.git/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 USERINPUT.
package userdata2;
import java.awt.Color;
import java.awt.PopupMenu;
import javax.swing.*;
import static sun.swing.SwingUtilities2.submit;

/**
 *
 * @author olivia saina
 */
public class Userdata2 {
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
         JFrame myframe=new JFrame("My Program");
    JPanel mypanel=new JPanel();
    JLabel namelabel=new JLabel("Name:");
    //JLabel usernamelabel=new JLabel("Username:");
    JTextField name=new JTextField();
    JTextField username=newJTextField();
    //username.setColumns(10);
    name.setColumns(20);
   
    private static JTextField newJTextField() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

       
    }
    CONNECTION TO DATABASE.
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author olivia saina
 */
public class Database {

    /**
     * @param args the command line arguments
     * @throws java.sql.SQLException
     * @throws java.lang.ClassNotFoundException
     */
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        //register driver
        Class.forName("com.mysql.Driver");
    //establish connection to data base
    Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/mysql?zero);
    System.out.println("Connection Established..");
    Statement st=conn.createStatement();
    String queryl="INSERT INTO usertable VALUES('Patrick','Male')";
    st.executeQuery(queryl);
    System.out.println("Query 1 success");
    String query2="SELECT * FROM usertable";
    ResultSet rs = st.executeQuery(query2);
    while(rs.next())
    {
        String name=rs.getString("username");
        String pass=rs.getString("password");
        //System.out.print("Name":+name"password:"+pass);
    }
    System.out.println("Results Obtained");
   
    }
    
}
PIECHART
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package piechart2;

import java.awt.BorderLayout;

import java.awt.BoarderLayout;
import java.awt.Color;
import org.jfree.chart.ChartFactory;
import org.jfree.ChartPanel;
import org.jfree.JFreeChart;
import org.jfree.plot.CategoryPlot;
import org.jfree.plot.plotOrientation;
import.org.jfree.data.category.DefaultCategoryDataset;
import java.awt.BorderLayout;
import static java.lang.System.in;
import javax.swing.JFrame;

/**
 *
 * @author olivia saina
 */
public class Piechart2 {

    /**
     * @param args the command line arguments
     */
    //public static void main(String[] args) {
    *
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package piechart2;
import javax.swing.JFrame;

/**
 *
 * @author olivia saina
 */
class PieDataSet {
    public static void main(String[]args)
            
    {
        CreateChart cc =new CreateChart("Pie Chart Test","OS comparison");
        cc.pack();
        cc.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        CC.setVisible(true);
    }
    
}

    public Piechart2(String appTitle,String chartTitle)
    {
       pieDataSet dataset=createDataset();
       JFreeChart=createChart(dataset,chartTitle);
       ChartPanel chartpanel=new ChartPanel(chart);
       chartPanel.setPreferredSize(new java.awt.Dimension(500,300));
       setContentPane(chartPanel);
    }
    private PieDataSet createDataset()
    {
        DefaultPieDataset result=new DefaultPieSataset;
        result.setValue("girls",70);
        result.setValue("boys",65);
        result.setValue("others",54);
        return result;
    }
    private JFreeChart createChart(PieDataset dataset,String title)
    {
        JFreeChart chart=ChartFactory.createPieChart3D(title,dataset,true,true,false);
        PiePlot3D plot=(PiePlot3D)chart.getPlot();
        plot.setStartAngle(0);
        plot.setDirection(Rotation.CLOCKWISE);
        Plot.setForegroundAlpha(0.5f);
        return chart
                }
    
    
        // TODO code application logic here
        /* DefaultPieDataset pieDataset=new DefaultPieDataset();
          pieDataset.setValue("girls", 10);
          pieDataset.setValue("boys", 40);
          pieDataset.setValue("others",15);
          JFreeChart piechart =ChartFactory.createPieChart3D("STUDENTS",pieDataset,true,true,true);
         // piePlot3D piechart=(piePlot3D)piecHART.getPlot();
          ChartPanel piePanel = new ChartPanel(piechart);
        
          panelChart.removeALL();
         // panelChart.add(piePanel,BorderLayout.CENTRE);
          panelChart.validate();*/
         
}
PIECHART


/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package piechart2;

import java.awt.BorderLayout;

import java.awt.BoarderLayout;
import java.awt.Color;
import org.jfree.chart.ChartFactory;
import org.jfree.ChartPanel;
import org.jfree.JFreeChart;
import org.jfree.plot.CategoryPlot;
import org.jfree.plot.plotOrientation;
import.org.jfree.data.category.DefaultCategoryDataset;
import java.awt.BorderLayout;
import static java.lang.System.in;
import javax.swing.JFrame;

/**
 *
 * @author olivia saina
 */
public class Piechart2 {

    /**
     * @param args the command line arguments
     */
    //public static void main(String[] args) {
    *
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package piechart2;
import javax.swing.JFrame;

/**
 *
 * @author olivia saina
 */
class PieDataSet {
    public static void main(String[]args)
            
    {
        CreateChart cc =new CreateChart("Pie Chart Test","OS comparison");
        cc.pack();
        cc.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        CC.setVisible(true);
    }
    
}

    public Piechart2(String appTitle,String chartTitle)
    {
       pieDataSet dataset=createDataset();
       JFreeChart=createChart(dataset,chartTitle);
       ChartPanel chartpanel=new ChartPanel(chart);
       chartPanel.setPreferredSize(new java.awt.Dimension(500,300));
       setContentPane(chartPanel);
    }
    private PieDataSet createDataset()
    {
        DefaultPieDataset result=new DefaultPieSataset;
        result.setValue("girls",70);
        result.setValue("boys",65);
        result.setValue("others",54);
        return result;
    }
    private JFreeChart createChart(PieDataset dataset,String title)
    {
        JFreeChart chart=ChartFactory.createPieChart3D(title,dataset,true,true,false);
        PiePlot3D plot=(PiePlot3D)chart.getPlot();
        plot.setStartAngle(0);
        plot.setDirection(Rotation.CLOCKWISE);
        Plot.setForegroundAlpha(0.5f);
        return chart
                }
    
    
        // TODO code application logic here
        /* DefaultPieDataset pieDataset=new DefaultPieDataset();
          pieDataset.setValue("girls", 10);
          pieDataset.setValue("boys", 40);
          pieDataset.setValue("others",15);
          JFreeChart piechart =ChartFactory.createPieChart3D("STUDENTS",pieDataset,true,true,true);
         // piePlot3D piechart=(piePlot3D)piecHART.getPlot();
          ChartPanel piePanel = new ChartPanel(piechart);
        
          panelChart.removeALL();
         // panelChart.add(piePanel,BorderLayout.CENTRE);
          panelChart.validate();*/
         
}




    


LOGIN SYSTEM./*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package databaseconector;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;

/**
 *
 * @author olivia saina
 */
public class Databaseconector {
    String URL="jdbc:mysql://localhost:3360/usertable";
    String user="root";
    String pass="";
    Connection conn;
    
    public Connection Databaseconector() throws SQLException{
        try{
            conn=DriverManager.getConnection(URL, user, pass);
        }catch (SQLException ex){
            logger.getLogger(DatabaseConnector.class.getName()).log(Level.SEVERE,null)
        }
        return conn;
    }
}
    

    /**
     * @param args the command line arguments
     */
    //public static void main(String[] args) {
        // TODO code application logic here
   // }
    
}




