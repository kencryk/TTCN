package com.aptech.project.project_sem4.model;

import org.springframework.data.annotation.Id;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class BaiLam {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String className;
    private int SoCau;
    private int ThoiGian;
    // Class:
    public String getClassName() {
        return className;
    }

    public void setClassName(String class_Name) {
        this.className = class_Name;
    }

    public int getSoCau() {
        return SoCau;
    }

    public void setSoCau(int soCau) {
        SoCau = soCau;
    }

    public int getThoiGian() {
        return ThoiGian;
    }

    public void setThoiGian(int thoiGian) {
        ThoiGian = thoiGian;
    }
}
