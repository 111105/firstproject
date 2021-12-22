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
